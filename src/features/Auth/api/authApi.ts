import { rtkApi } from '@/shared/api/rtkApi'
import {
  IAuthResponse,
  ILoginReqBody,
  IRegisterReqBody,
  IResetPasswordReqBody
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
    resetPassword: build.mutation<string, IResetPasswordReqBody>({
      query: (body) => ({
        url: '/auth/reset-password',
        method: 'PUT',
        body
      })
    }),
    checkUserAvailability: build.query<boolean, string>({
      query: (value) => ({
        url: `/auth/check-user-availability/${value}`,
        method: 'GET'
      })
    })
  })
})

export const {
  login: { initiate: loginInitiate },
  register: { initiate: registerInitiate },
  resetPassword: { initiate: resetPasswordInitiate },
  checkUserAvailability: { useLazyQuery: useLazyCheckUserAvailability }
} = authApi.endpoints
