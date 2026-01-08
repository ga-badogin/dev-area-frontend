import { FieldErrors, Resolver } from 'react-hook-form'
import {
  validateCode,
  validateIdentifier,
  validatePassword
} from '@/shared/lib/react-hook-form/validators'
import { ILoginReqBody } from '@/entities/auth'

export const loginFormResolver =
  (isCode: boolean | undefined): Resolver<ILoginReqBody> =>
  async (values) => {
    const errors: FieldErrors<ILoginReqBody> = {}

    if (!isCode) {
      // identifier
      const identifierError = validateIdentifier(values.identifier)
      if (identifierError) errors.identifier = identifierError

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
