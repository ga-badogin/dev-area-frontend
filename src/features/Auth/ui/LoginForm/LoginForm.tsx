import { memo } from 'react'
import { loginFormResolver } from '../../lib/validation/resolvers/loginFormResolver'
import { useLoginMutation } from '../../api/authApi'
import { AuthForm } from '../AuthForm/AuthForm'
import MailIcon from '@/shared/assets/icons/InputMail.svg'
import LockIcon from '@/shared/assets/icons/InputLock.svg'

interface LoginProps {
  className?: string
}

const LoginForm = memo((props: LoginProps) => {
  const { className } = props

  const [login, { isLoading }] = useLoginMutation()

  return (
    <AuthForm
      resolver={loginFormResolver}
      onSubmit={(data) => login(data)}
      codeRegisterName="code"
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
