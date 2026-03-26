import cls from './ui/AuthFormTemplate.module.scss'
export { cls }
export {
  loginInitiate,
  registerInitiate,
  resetPasswordInitiate,
  useLazyCheckUsernameUnique,
  useLazyCheckEmailUnique,
  useLogoutMutation
} from './api/authApi'
export { useIsCode } from './model/selectors/getIsCode'
export {
  authReducer,
  getAuthActions,
  useAuthActions
} from './model/slice/authSlice'
export { AuthFormTemplate } from './ui/AuthFormTemplate'
export { AuthFormTemplateSkeleton } from './ui/AuthFormTemplateSkeleton'
export type {
  ILoginReqBody,
  IRegisterReqBody,
  IAuthResponse,
  IResetPasswordReqBody
} from './model/types/authApi'
export type { IAuthSchema } from './model/types/authSchema'
