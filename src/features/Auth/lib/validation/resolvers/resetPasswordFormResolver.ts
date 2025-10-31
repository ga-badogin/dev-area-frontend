import { FieldErrors, Resolver } from 'react-hook-form'
import { IResetPasswordReqBody } from '../../../model/types/authSchema'
import { validateEmail, validatePassword } from './validators'

export const resetPasswordFormResolver: Resolver<
  IResetPasswordReqBody
> = async (values) => {
  const errors: FieldErrors = {}

  // email
  const emailError = validateEmail(values.email)
  if (emailError) errors.email = emailError

  // password
  const passwordError = validatePassword(values.password, true)
  if (passwordError) errors.password = passwordError

  // code
  if (values.code?.length === 0) {
    errors.code = {
      type: 'required',
      message: 'Поле кода обязательно для заполнения'
    }
  }

  return {
    values: Object.keys(errors).length === 0 ? values : {},
    errors
  }
}
