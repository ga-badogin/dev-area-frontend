import { FieldErrors, Resolver } from 'react-hook-form'
import { IRegisterReqBody } from '../../../model/types/authSchema'
import { validateEmail, validatePassword } from './validators'

export const registerFormResolver: Resolver<IRegisterReqBody> = async (
  values
) => {
  const errors: FieldErrors<IRegisterReqBody> = {}

  // email
  const emailError = validateEmail(values.email)
  if (emailError) errors.email = emailError

  // password
  const passwordError = validatePassword(values.password, true)
  if (passwordError) errors.password = passwordError

  // name
  if (values.name.length === 0) {
    errors.name = {
      type: 'required',
      message: 'Поле имени обязательно для заполнения'
    }
  }

  // username
  if (values.username.length === 0) {
    errors.username = {
      type: 'required',
      message: 'Поле имени пользователя обязательно для заполнения'
    }
  }

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
