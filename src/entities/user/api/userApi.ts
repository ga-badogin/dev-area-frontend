import { rtkApi } from '@/shared/api/rtkApi'
import { IGetMeResponse } from '../model/types/userApi'

export const userApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getMe: build.query<IGetMeResponse, void>({
      query: () => ({
        url: `/auth/me`,
        method: 'GET'
      }),
      providesTags: ['User']
    })
  })
})

export const {
  getMe: { useQuery: useGetMeQuery }
} = userApi.endpoints
