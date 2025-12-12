import { memo } from 'react'
import { loginFormResolver } from '../../lib/validation/resolvers/loginFormResolver'
import { AuthForm } from '../AuthForm/AuthForm'
import MailIcon from '@/shared/assets/icons/InputMail.svg'
import LockIcon from '@/shared/assets/icons/InputLock.svg'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { login } from '../../model/services/login'
import { useIsCode } from '../../model/selectors/getIsCode'

interface LoginProps {
  className?: string
}

const LoginForm = memo((props: LoginProps) => {
  const dispatch = useAppDispatch()
  const isCode = useIsCode()

  return (
    <AuthForm
      resolver={loginFormResolver(isCode)}
      onSubmit={(data) => dispatch(login(data))}
      codeName="code"
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
