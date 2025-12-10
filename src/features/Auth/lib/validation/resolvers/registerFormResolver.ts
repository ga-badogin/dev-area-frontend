import { FieldErrors, Resolver } from 'react-hook-form'
import { IRegisterReqBody } from '../../../model/types/authApi'
import { validateEmail, validatePassword } from './validators'

export const registerFormResolver =
  (
    onChangeEmail: (value: string, callback: () => void) => Promise<void>,
    deleteTimeout: () => void
  ): Resolver<IRegisterReqBody> =>
  async (values, _, options) => {
    const errors: FieldErrors<IRegisterReqBody> = {}
    const currentField = options.names

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

    // code
    if (values.code?.length === 0) {
      errors.code = {
        type: 'required',
        message: 'Поле кода обязательно для заполнения'
      }
    }

    // username
    if (values.username.length === 0) {
      deleteTimeout()
      errors.username = {
        type: 'required',
        message: 'Поле имени пользователя обязательно для заполнения'
      }
    } else if (currentField?.includes('username')) {
      await onChangeEmail(
        values.username,
        () =>
          (errors.username = {
            type: 'required',
            message: 'Имя занято другим челиком'
          })
      )
    }

    //email
    const emailError = validateEmail(values.email)
    if (!emailError) {
      if (currentField?.includes('email')) {
        await onChangeEmail(
          values.email,
          () =>
            (errors.email = {
              type: 'required',
              message: 'Почта занята другим челиком'
            })
        )
      }
    } else {
      deleteTimeout()
      errors.email = emailError
    }

    return {
      values: Object.keys(errors).length === 0 ? values : {},
      errors
    }
  }
