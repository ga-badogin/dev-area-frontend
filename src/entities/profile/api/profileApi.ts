import { IProfile } from '../model/types/profileApi'
import { IProfileForm } from '../model/types/profileForm'
import { rtkApi } from '@/shared/api/rtkApi'

const profileApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getProfile: build.query<IProfile, string>({
      query: (username) => ({
        url: `/profile/get/${username}`,
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
    createProfile: build.mutation<boolean, IProfileForm>({
      query: (profile) => ({
        url: '/profile/create',
        method: 'POST',
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
  getProfile: { useQuery: useGetProfile },
  updateProfile: { initiate: updateProfileInitiate },
  updateAvatar: { initiate: updateAvatarInitiate },
  createProfile: { initiate: createProfileInitiate }
} = profileApi.endpoints
