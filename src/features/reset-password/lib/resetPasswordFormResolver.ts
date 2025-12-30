import { FieldErrors, Resolver } from 'react-hook-form'
import {
  validateCode,
  validateIdentifier,
  validatePassword
} from '@/shared/lib/react-hook-form/validators'
import { IResetPasswordReqBody } from '@/entities/auth'

export const resetPasswordFormResolver =
  (isCode: boolean | undefined): Resolver<IResetPasswordReqBody> =>
  async (values) => {
    const errors: FieldErrors<IResetPasswordReqBody> = {}

    if (!isCode) {
      // identifier
      const identifierError = validateIdentifier(values.identifier)
      if (identifierError) errors.identifier = identifierError

      // password
      const passwordError = validatePassword(values.password, true)
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
