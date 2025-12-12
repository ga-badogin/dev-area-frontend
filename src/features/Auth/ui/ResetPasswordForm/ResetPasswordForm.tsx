import { memo } from 'react'
import { resetPasswordFormResolver } from '../../lib/validation/resolvers/resetPasswordFormResolver'
import MailIcon from '@/shared/assets/icons/InputMail.svg'
import LockIcon from '@/shared/assets/icons/InputLock.svg'
import { AuthForm } from '../AuthForm/AuthForm'
import { resetPassword } from '../../model/services/resetPassword'
import { useIsCode } from '../../model/selectors/getIsCode'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'

interface ResetPasswordProps {
  className?: string
}

const ResetPasswordForm = memo((props: ResetPasswordProps) => {
  const { className } = props

  const dispatch = useAppDispatch()
  const isCode = useIsCode()

  return (
    <AuthForm
      resolver={resetPasswordFormResolver(isCode)}
      onSubmit={(data) => dispatch(resetPassword(data))}
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
