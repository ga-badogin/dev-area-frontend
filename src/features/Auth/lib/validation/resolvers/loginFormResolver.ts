import { FieldErrors, Resolver } from 'react-hook-form'
import { validateEmail, validatePassword } from './validators'
import { ILoginReqBody } from '../../../model/types/authApi'

export const loginFormResolver: Resolver<ILoginReqBody> = async (values) => {
  const errors: FieldErrors<ILoginReqBody> = {}

  // email
  const emailError = validateEmail(values.email)
  if (emailError) errors.email = emailError

  // password
  const passwordError = validatePassword(values.password)
  if (passwordError) errors.password = passwordError

  // code
  if (!values.code || values.code?.length === 0) {
    errors.code = {
      type: 'required',
      message: 'Поле кода обязательно для заполнения'
    }
  } else if (values.code?.length < 6) {
    errors.code = {
      type: 'required',
      message: 'Введите код полностью'
    }
  }

  return {
    values: Object.keys(errors).length === 0 ? values : {},
    errors
  }
}
