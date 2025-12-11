import { memo } from 'react'
import { resetPasswordFormResolver } from '../../lib/validation/resolvers/resetPasswordFormResolver'
import MailIcon from '@/shared/assets/icons/InputMail.svg'
import LockIcon from '@/shared/assets/icons/InputLock.svg'
import { AuthForm } from '../AuthForm/AuthForm'
import { resetPassword } from '../../model/services/resetPassword'

interface ResetPasswordProps {
  className?: string
}

const ResetPasswordForm = memo((props: ResetPasswordProps) => {
  const { className } = props

  return (
    <AuthForm
      resolver={resetPasswordFormResolver}
      onSubmit={(data) => resetPassword(data)}
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

export default ResetPasswordForm
