import { rtkApi } from '@/shared/api/rtkApi'
import {
  IAuthResponse,
  ILoginReqBody,
  IRegisterReqBody,
  IResetPasswordReqBody,
  IResetResponse
} from '../model/types/authApi'

const authApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.mutation<IAuthResponse, IRegisterReqBody>({
      query: (body) => ({
        url: '/auth/register',
        method: 'POST',
        body
      })
    }),
    login: build.mutation<IAuthResponse, ILoginReqBody>({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body
      })
    }),
    resetPassword: build.mutation<IResetResponse, IResetPasswordReqBody>({
      query: (body) => ({
        url: '/auth/reset-password',
        method: 'PUT',
        body
      })
    }),
    logout: build.mutation<true, void>({
      query: () => ({
        url: '/auth/logout',
        method: 'POST'
      }),

      invalidatesTags: ['User']
    }),
    checkEmailUnique: build.query<boolean, string>({
      query: (email) => ({
        url: `/auth/check-email-unique/${email}`,
        method: 'GET'
      })
    }),
    checkUsernameUnique: build.query<boolean, string>({
      query: (username) => ({
        url: `/auth/check-username-unique/${username}`,
        method: 'GET'
      })
    })
  })
})

export const {
  login: { initiate: loginInitiate },
  register: { initiate: registerInitiate },
  resetPassword: { initiate: resetPasswordInitiate },
  checkEmailUnique: { useLazyQuery: useLazyCheckEmailUnique },
  checkUsernameUnique: { useLazyQuery: useLazyCheckUsernameUnique },
  logout: { useMutation: useLogoutMutation }
} = authApi.endpoints
