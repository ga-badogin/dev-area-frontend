import cls from './ui/AuthFormTemplate/AuthFormTemplate.module.scss'
export { cls }
export {
  loginInitiate,
  registerInitiate,
  resetPasswordInitiate,
  useLazyCheckUsernameUnique,
  useLazyCheckEmailUnique
} from './api/authApi'
export { useIsCode } from './model/selectors/getIsCode'
export { authReducer, authActions } from './model/slice/authSlice'
export { AuthFormTemplate } from './ui/AuthFormTemplate/AuthFormTemplate'
export type {
  ILoginReqBody,
  IRegisterReqBody,
  IAuthResponse,
  IResetPasswordReqBody
} from './model/types/authApi'
export type { IAuthSchema } from './model/types/authSchema'
