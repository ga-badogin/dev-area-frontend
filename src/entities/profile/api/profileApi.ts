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
    searchProfile: build.query<
      IAbout[],
      { search: string; page: number; limit: number }
    >({
      query: (params) => ({
        url: '/profile/search',
        method: 'GET',
        params
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
  searchProfile: { initiate: searchProfileInitiate },
  updateProfile: { initiate: updateProfileInitiate },
  updateAvatar: { initiate: updateAvatarInitiate },
  createProfile: { useMutation: useCreateProfile }
} = profileApi.endpoints
