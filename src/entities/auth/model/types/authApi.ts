export interface IRegisterReqBody {
  email: string
  password: string
  username: string
  code?: string
}

export interface ILoginReqBody {
  identifier: string
  password: string
  code?: string
}

export interface IResetPasswordReqBody {
  identifier: string
  password: string
  code?: string
}

export type IResetResponse = { step: 'DONE' | 'CONFIRM_CODE' }

export type IAuthResponse =
  | { step: 'DONE'; accessToken: string }
  | { step: 'CONFIRM_CODE' }
