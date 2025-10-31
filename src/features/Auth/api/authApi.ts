import { rtkApi } from '@/shared/api/rtkApi'
import {
  ILoginReqBody,
  IRegisterReqBody,
  IResetPasswordReqBody
} from '../model/types/authSchema'

const authApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    register: build.query<any, IRegisterReqBody>({
      query: (body) => ({
        url: '/auth/register',
        method: 'POST',
        body
      })
    }),
    login: build.query<any, ILoginReqBody>({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body
      })
    }),
    resetPassword: build.query<any, IResetPasswordReqBody>({
      query: (body) => ({
        url: '/auth/reset-password',
        method: 'PUT',
        body
      })
    })
  })
})

export const {
  useLazyRegisterQuery,
  useLazyLoginQuery,
  useLazyResetPasswordQuery
} = authApi
