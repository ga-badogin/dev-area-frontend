import { FieldErrors, Resolver } from 'react-hook-form'
import {
  validateCode,
  validateEmail,
  validatePassword
} from '@/shared/lib/react-hook-form/validators'
import { ILoginReqBody, IRegisterReqBody } from '@/entities/auth'

export const loginFormResolver =
  (isCode: boolean | undefined): Resolver<ILoginReqBody> =>
  async (values) => {
    const errors: FieldErrors<IRegisterReqBody> = {}

    if (!isCode) {
      // email
      const emailError = validateEmail(values.email)
      if (emailError) errors.email = emailError

      // password
      const passwordError = validatePassword(values.password)
      if (passwordError) errors.password = passwordError
    } else {
      // code
      const codeError = validateCode(values.code)
      if (codeError) errors.code = codeError
    }

    return {
      values: Object.keys(errors).length === 0 ? values : {},
      errors
    }
  }
