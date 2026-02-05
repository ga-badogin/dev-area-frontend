import { rtkApi } from '@/shared/api/rtkApi'
import { IAbout, IProfile } from '../model/types/profileApi'
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
        url: `/profile/get/${username || ''}`,
        method: 'GET'
      })
    }),
    searchProfile: build.query<IAbout[], string>({
      query: (value) => ({
        url: `/profile/search?search=${value}`,
        method: 'GET'
      })
    }),
    updateProfile: build.mutation<IProfile, IProfileForm>({
      query: (profile) => ({
        url: '/profile/update',
        method: 'PATCH',
        body: profile
      })
    }),
    updateAvatar: build.mutation<boolean, File>({
      query: (file) => {
        const formData = new FormData()
        formData.append('file', file)

        return {
          url: '/profile/update-avatar',
          method: 'PUT',
          body: formData
        }
      }
    })
  })
})

export const {
  hasProfile: { useQuery: useHasProfile },
  getProfile: { useQuery: useGetProfile },
  searchProfile: { useQuery: useSearchProfile },
  updateProfile: { initiate: updateProfileInitiate },
  updateAvatar: { initiate: updateAvatarInitiate }
} = profileApi.endpoints
