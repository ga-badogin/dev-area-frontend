export interface IRegisterReqBody {
  email: string
  password: string
  username: string
  name: string
  code?: string
}

export interface ILoginReqBody {
  email: string
  password: string
  code?: string
}

export interface IResetPasswordReqBody {
  email: string
  password: string
  code?: string
}

export type IAuthResponse =
  | {
      accessToken: string
    }
  | {
      message: string
      statusCode: number
    }
