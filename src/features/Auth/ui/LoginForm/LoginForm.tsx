import { memo } from 'react'
import { loginFormResolver } from '../../lib/validation/resolvers/loginFormResolver'
import { AuthForm } from '../AuthForm/AuthForm'
import MailIcon from '@/shared/assets/icons/InputMail.svg'
import LockIcon from '@/shared/assets/icons/InputLock.svg'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useIsLoading } from '../../model/selectors/getIsLoading'
import { login } from '../../model/services/login'

interface LoginProps {
  className?: string
}

const LoginForm = memo((props: LoginProps) => {
  const { className } = props

  const dispatch = useAppDispatch()
  const isLoading = useIsLoading()

  return (
    <AuthForm
      resolver={loginFormResolver}
      onSubmit={(data) => dispatch(login(data))}
      codeName="code"
      isLoading={isLoading}
      inputs={[
        { name: 'email', Icon: MailIcon, placeholder: 'Почта' },
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

export default LoginForm
