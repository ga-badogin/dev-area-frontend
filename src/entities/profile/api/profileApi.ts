import { rtkApi } from '@/shared/api/rtkApi'

const profileApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    update: build.mutation({
      query: () => ({
        url: '/profile/update',
        method: 'PATCH'
      })
    })
  })
})

export const {
  // login: { initiate: loginInitiate },
  // register: { initiate: registerInitiate },
  // resetPassword: { initiate: resetPasswordInitiate },
  // checkEmailUnique: { useLazyQuery: useLazyCheckEmailUnique },
  // checkUsernameUnique: { useLazyQuery: useLazyCheckUsernameUnique }
} = profileApi.endpoints
