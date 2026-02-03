import { memo } from 'react'
import { registerFormResolver } from '../lib/registerFormResolver'
import MailIcon from '@/shared/assets/icons/InputMail.svg'
import LockIcon from '@/shared/assets/icons/InputLock.svg'
import UserIcon from '@/shared/assets/icons/InputUser.svg'
import { register } from '../model/register'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import {
  AuthFormTemplate,
  useIsCode,
  useLazyCheckEmailUnique,
  useLazyCheckUsernameUnique
} from '@/entities/auth'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'
import {
  validateEmail,
  validateUsername
} from '@/shared/lib/react-hook-form/validators'
import { ErrorOption } from 'react-hook-form'

interface RegisterProps {
  className?: string
}

const RegisterForm = memo((props: RegisterProps) => {
  const dispatch = useAppDispatch()
  const isCode = useIsCode()

  const [checkEmailUnique, { isFetching: isEmailFetching }] =
    useLazyCheckEmailUnique()
  const [checkUsernameUnique, { isFetching: isUsernameFetching }] =
    useLazyCheckUsernameUnique()

  const checkEmail = useDebounce(
    async (value: string, callback: (option: ErrorOption) => void) => {
      if (!validateEmail(value)) {
        const { data } = await checkEmailUnique(value)
        if (data !== undefined && !data) {
          callback({ message: 'Почта занята другим челиком' })
        }
      }
    },
    300
  )

  const checkUsername = useDebounce(
    async (value: string, callback: (option: ErrorOption) => void) => {
      if (!validateUsername(value)) {
        const { data } = await checkUsernameUnique(value)
        if (data !== undefined && !data) {
          callback({ message: 'Имя пользователя занято другим челиком' })
        }
      }
    },
    300
  )

  return (
    <AuthFormTemplate
      resolver={registerFormResolver(isCode)}
      onSubmit={(data) => dispatch(register(data))}
      codeName={'code'}
      inputs={[
        {
          name: 'username',
          Icon: UserIcon,
          placeholder: 'Имя пользователя',
          isLoading: isUsernameFetching,
          onValidate: checkUsername
        },
        {
          name: 'email',
          Icon: MailIcon,
          placeholder: 'Почта',
          isLoading: isEmailFetching,
          onValidate: checkEmail
        },
        {
          name: 'password',
          Icon: LockIcon,
          placeholder: 'Пароль',
          type: 'password'
        }
      ]}
    />
  )
})

export default RegisterForm
