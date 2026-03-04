import { fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ACCESS_TOKEN_KEY } from '@/shared/consts/localestorage'
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError
} from '@reduxjs/toolkit/query'
import { getAuthActions } from '../../entities/auth/model/slice/authSlice'

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

export const baseQueryWithRefresh: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let res = await baseQuery(args, api, extraOptions)

  if (res.error && res.error.status === 401) {
    const { setIsAuth } = getAuthActions(api.dispatch)

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
      setIsAuth(false)
    }
  }

  return res
}
