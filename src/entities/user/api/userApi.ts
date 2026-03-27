import { rtkApi } from '@/shared/api/rtkApi'
import { IGetMeResponse } from '../model/types/userApi'
import { CreateProfilePageAsync } from '../../../pages/CreateProfilePage'

export const userApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getMe: build.query<IGetMeResponse, void>({
      query: () => ({
        url: `/auth/me`,
        method: 'GET'
      }),
      providesTags: ['User'],
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled

          if (!data.profile) await CreateProfilePageAsync.preload()
        } catch {}
      }
    })
  })
})

export const {
  getMe: { useQuery: useGetMeQuery }
} = userApi.endpoints
