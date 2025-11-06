import { memo } from 'react'
import { loginFormResolver } from '../../lib/validation/resolvers/loginFormResolver'
import { AuthForm } from '../AuthForm/AuthForm'
import MailIcon from '@/shared/assets/icons/InputMail.svg'
import LockIcon from '@/shared/assets/icons/InputLock.svg'
import { login } from '../../model/services/login'

interface LoginProps {
  className?: string
}

const LoginForm = memo((props: LoginProps) => {
  const { className } = props

  return (
    <AuthForm
      resolver={loginFormResolver}
      onSubmit={(data) => login(data)}
      codeRegisterName="code"
      isLoading={false}
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
