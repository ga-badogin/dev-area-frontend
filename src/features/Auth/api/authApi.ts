import { rtkApi } from '@/shared/api/rtkApi'
import {
  IAuthResponse,
  ILoginReqBody,
  IRegisterReqBody,
  IResetPasswordReqBody
} from '../model/types/authApi'

export const authApi = rtkApi.injectEndpoints({
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
    })
  })
})

export const {
  useLoginMutation,
  useRegisterMutation,
  useResetPasswordMutation
} = authApi
