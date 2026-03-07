import { IAbout, IProfile } from '../model/types/profileApi'
import { IProfileForm } from '../model/types/profileForm'
import { rtkApi } from '@/shared/api/rtkApi'

const profileApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
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
    createProfile: build.mutation<boolean, IProfileForm>({
      query: (profile) => ({
        url: '/profile/create',
        method: 'POST',
        body: profile
      }),
      invalidatesTags: ['User']
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
  searchProfile: { useQuery: useSearchProfile },
  updateProfile: { initiate: updateProfileInitiate },
  updateAvatar: { initiate: updateAvatarInitiate },
  createProfile: { useMutation: useCreateProfile }
} = profileApi.endpoints
