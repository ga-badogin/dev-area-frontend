import { FieldErrors, Resolver } from 'react-hook-form'
import { IRegisterReqBody } from '@/entities/auth'
import {
  validateCode,
  validateEmail,
  validatePassword,
  validateUsername
} from '@/shared/lib/react-hook-form/validators'

export const registerFormResolver =
  (isCode: boolean | undefined): Resolver<IRegisterReqBody> =>
  (values) => {
    const errors: FieldErrors<IRegisterReqBody> = {}

    if (!isCode) {
      const usernameError = validateUsername(values.username)
      if (usernameError) errors.username = usernameError

      const emailError = validateEmail(values.email)
      if (emailError) errors.email = emailError

      const passwordError = validatePassword(values.password, true)
      if (passwordError) errors.password = passwordError
    } else {
      const codeError = validateCode(values.code)
      if (codeError) errors.code = codeError
    }

    return {
      values: Object.keys(errors).length === 0 ? values : {},
      errors
    }
  }
