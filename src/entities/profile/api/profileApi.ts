import { rtkApi } from '@/shared/api/rtkApi'
import { IProfile } from '../model/types/profileApi'
import { IProfileForm } from '../model/types/profileForm'

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
    }),
    updateProfile: build.mutation<IProfile, IProfileForm>({
      query: (profile) => ({
        url: '/profile/update',
        method: 'PATCH',
        body: profile
      })
    })
  })
})

export const {
  hasProfile: { useQuery: useHasProfile },
  getProfile: { useQuery: useGetProfile },
  updateProfile: { initiate: updateProfileInitiate }
} = profileApi.endpoints
