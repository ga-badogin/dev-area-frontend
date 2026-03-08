import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ACCESS_TOKEN_KEY } from '@/shared/consts/localestorage'
import { Mutex } from 'async-mutex'
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError
} from '@reduxjs/toolkit/query'

const baseQuery = fetchBaseQuery({
  baseUrl: __API_URL__,
  credentials: 'include',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY)
    if (token) {
      headers.set('Authorization', `Bearer ${token}`)
    }
    return headers
  }
})

const mutex = new Mutex()

export const baseQueryWithRefresh: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()

  let res = await baseQuery(args, api, extraOptions)

  if (res.error && res.error.status === 401) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()

      try {
        const refreshRes = await baseQuery(
          { url: '/auth/refresh', method: 'POST' },
          api,
          extraOptions
        )

        if (refreshRes.data) {
          const data = refreshRes.data as { accessToken: string }

          localStorage.setItem(ACCESS_TOKEN_KEY, data.accessToken)

          res = await baseQuery(args, api, extraOptions)
        } else {
          localStorage.removeItem(ACCESS_TOKEN_KEY)
        }
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()
      res = await baseQuery(args, api, extraOptions)
    }
  }

  return res
}
