import { FieldErrors, Resolver } from 'react-hook-form'
import { IRegisterReqBody } from '../../../model/types/authApi'
import { validateCode, validateEmail, validatePassword } from './validators'

export const registerFormResolver =
  (
    checkFieldsUnique: (
      field: 'email' | 'username',
      value: string,
      callback: () => void
    ) => Promise<void>,
    deleteTimeout: () => void,
    isCode?: boolean
  ): Resolver<IRegisterReqBody> =>
  async (values, _, options) => {
    const errors: FieldErrors<IRegisterReqBody> = {}
    const currentField = options.names

    console.log('resolver')

    if (!isCode) {
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
        deleteTimeout()
        errors.username = {
          type: 'required',
          message: 'Поле имени пользователя обязательно для заполнения'
        }
      } else if (currentField?.includes('username')) {
        await checkFieldsUnique(
          'username',
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
          await checkFieldsUnique(
            'email',
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
