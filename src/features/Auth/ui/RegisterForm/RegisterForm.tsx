import { memo } from 'react'
import { registerFormResolver } from '../../lib/validation/resolvers/registerFormResolver'
import { useRegisterMutation } from '../../api/authApi'
import MailIcon from '@/shared/assets/icons/InputMail.svg'
import LockIcon from '@/shared/assets/icons/InputLock.svg'
import UserIcon from '@/shared/assets/icons/InputUser.svg'
import { AuthForm } from '../AuthForm/AuthForm'

interface RegisterProps {
  className?: string
}

const RegisterForm = memo((props: RegisterProps) => {
  const { className } = props

  const [register, { isLoading }] = useRegisterMutation()

  return (
    <AuthForm
      resolver={registerFormResolver}
      onSubmit={(data) => register(data)}
      codeRegisterName="code"
      isLoading={isLoading}
      inputs={[
        { name: 'name', Icon: UserIcon, placeholder: 'Имя' },
        { name: 'username', Icon: UserIcon, placeholder: 'Имя пользователя' },
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

export default RegisterForm
