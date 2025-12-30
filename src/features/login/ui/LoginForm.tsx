import { memo } from 'react'
import { loginFormResolver } from '../lib/loginFormResolver'
import MailIcon from '@/shared/assets/icons/InputMail.svg'
import LockIcon from '@/shared/assets/icons/InputLock.svg'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { AuthFormTemplate, useIsCode } from '@/entities/auth'
import { login } from '../model/login'

interface LoginProps {
  className?: string
}

const LoginForm = memo((props: LoginProps) => {
  const dispatch = useAppDispatch()
  const isCode = useIsCode()

  return (
    <AuthFormTemplate
      resolver={loginFormResolver(isCode)}
      onSubmit={(data) => dispatch(login(data))}
      codeName="code"
      inputs={[
        {
          name: 'identifier',
          Icon: MailIcon,
          placeholder: 'Имя пользователя или почта'
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

export default LoginForm
