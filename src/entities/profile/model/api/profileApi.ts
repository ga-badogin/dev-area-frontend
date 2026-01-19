import { rtkApi } from '@/shared/api/rtkApi'
import { IProfile } from '../types/profileApi'

const profileApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    hasProfile: build.query<boolean, void>({
      query: () => ({
        url: '/profile/has-profile',
        method: 'GET'
      })
    }),
    getProfile: build.query<IProfile, string | undefined>({
      query: (username) => ({
        url: `/profile/${username || ''}`,
        method: 'GET'
      })
    })
  })
})

export const {
  hasProfile: { useQuery: useHasProfile },
  getProfile: { useQuery: useGetProfile }
} = profileApi.endpoints
