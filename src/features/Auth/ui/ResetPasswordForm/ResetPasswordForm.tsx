import { memo } from 'react'
import { resetPasswordFormResolver } from '../../lib/validation/resolvers/resetPasswordFormResolver'
import { useResetPasswordMutation } from '../../api/authApi'
import MailIcon from '@/shared/assets/icons/InputMail.svg'
import LockIcon from '@/shared/assets/icons/InputLock.svg'
import { AuthForm } from '../AuthForm/AuthForm'

interface ResetPasswordProps {
  className?: string
}

const ResetPasswordForm = memo((props: ResetPasswordProps) => {
  const { className } = props

  const [resetPassword, { isLoading }] = useResetPasswordMutation()

  return (
    <AuthForm
      resolver={resetPasswordFormResolver}
      onSubmit={(data) => resetPassword(data)}
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

export default ResetPasswordForm
