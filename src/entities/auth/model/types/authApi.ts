export interface IRegisterReqBody {
  email: string
  password: string
  username: string
  name: string
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

export type IResetResponse =
  | boolean
  | {
      message: string
      statusCode: number
    }

export type IAuthResponse =
  | {
      accessToken: string
    }
  | {
      message: string
      statusCode: number
    }
