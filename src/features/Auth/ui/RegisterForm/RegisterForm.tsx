import { ChangeEvent, memo } from 'react'
import { registerFormResolver } from '../../lib/validation/resolvers/registerFormResolver'
import MailIcon from '@/shared/assets/icons/InputMail.svg'
import LockIcon from '@/shared/assets/icons/InputLock.svg'
import UserIcon from '@/shared/assets/icons/InputUser.svg'
import { AuthForm } from '../AuthForm/AuthForm'
import { register } from '../../model/services/register'
import { useIsLoading } from '../../model/selectors/getIsLoading'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useLazyCheckUserAvailability } from '../../api/authApi'
import { useDebounce } from '@/shared/lib/hooks/useDebounce/useDebounce'

interface RegisterProps {
  className?: string
}

const RegisterForm = memo((props: RegisterProps) => {
  const { className } = props

  const dispatch = useAppDispatch()
  const isLoading = useIsLoading()

  const [checkUserAvailability, {}] = useLazyCheckUserAvailability()

  const onChangeEmail = useDebounce((e: ChangeEvent<HTMLInputElement>) => {
    checkUserAvailability(e.target.value)
  }, 500)

  return (
    <AuthForm
      resolver={registerFormResolver}
      onSubmit={(data) => dispatch(register(data))}
      codeRegisterName="code"
      isLoading={isLoading}
      inputs={[
        { name: 'name', Icon: UserIcon, placeholder: 'Имя' },
        { name: 'username', Icon: UserIcon, placeholder: 'Имя пользователя' },
        {
          name: 'email',
          Icon: MailIcon,
          placeholder: 'Почта',
          onChange: onChangeEmail
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
