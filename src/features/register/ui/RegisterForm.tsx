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

  const checkFieldsUnique = useDebounce(
    async (
      field: 'email' | 'username',
      value: string,
      callback: () => void
    ) => {
      const { data } = await (
        field === 'email' ? checkEmailUnique : checkUsernameUnique
      )(value)
      if (data !== undefined && !data) {
        callback()
      }
    },
    300
  )

  return (
    <AuthFormTemplate
      resolver={registerFormResolver(checkFieldsUnique, isCode)}
      onSubmit={(data) => dispatch(register(data))}
      codeName={'code'}
      inputs={[
        { name: 'name', Icon: UserIcon, placeholder: 'Имя' },
        {
          name: 'username',
          Icon: UserIcon,
          placeholder: 'Имя пользователя',
          isLoading: isUsernameFetching
        },
        {
          name: 'email',
          Icon: MailIcon,
          placeholder: 'Почта',
          isLoading: isEmailFetching
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
