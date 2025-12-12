import { FieldErrors, Resolver } from 'react-hook-form'
import { IRegisterReqBody } from '../../../model/types/authApi'
import {
  validateCode,
  validateEmail,
  validatePassword,
  validateUsername
} from './validators'

export const registerFormResolver =
  (
    checkFieldsUnique: (
      args: [field: 'email' | 'username', value: string, callback: () => void],
      isValid: boolean
    ) => Promise<void> | void,
    isCode: boolean | undefined
  ): Resolver<IRegisterReqBody> =>
  async (values, _, options) => {
    const errors: FieldErrors<IRegisterReqBody> = {}
    const currentField = options.names

    console.log('\nRESOLVER')

    if (!isCode) {
      console.log('FORM')
      // name
      if (values.name.length === 0) {
        console.log('name')
        errors.name = {
          type: 'required',
          message: 'Поле имени обязательно для заполнения'
        }
      }

      // username
      if (currentField?.includes('username')) {
        console.log('username')
        const usernameError = validateUsername(values.username)
        if (usernameError) errors.username = usernameError

        await checkFieldsUnique(
          [
            'username',
            values.username,
            () =>
              (errors.username = {
                type: 'required',
                message: 'Имя занято другим челиком'
              })
          ],
          !Boolean(usernameError)
        )
      }

      //email
      if (currentField?.includes('email')) {
        console.log('email')
        const emailError = validateEmail(values.email)
        if (emailError) errors.email = emailError

        await checkFieldsUnique(
          [
            'email',
            values.email,
            () =>
              (errors.email = {
                type: 'required',
                message: 'Почта занята другим челиком'
              })
          ],
          !Boolean(emailError)
        )
      }

      // password
      const passwordError = validatePassword(values.password, true)
      if (passwordError) {
        console.log('password')
        errors.password = passwordError
      }
    } else {
      console.log('CODE')

      // code
      const codeError = validateCode(values.code)
      if (codeError) errors.code = codeError
    }

    return {
      values: Object.keys(errors).length === 0 ? values : {},
      errors
    }
  }
