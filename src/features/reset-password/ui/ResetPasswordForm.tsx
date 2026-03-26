import { memo } from 'react'
import { resetPasswordFormResolver } from '../lib/resetPasswordFormResolver'
import MailIcon from '@/shared/assets/icons/InputMail.svg'
import LockIcon from '@/shared/assets/icons/InputLock.svg'
import { resetPassword } from '../model/resetPassword'
import { AuthFormTemplate, useIsCode } from '@/entities/auth'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'

interface ResetPasswordProps {
  className?: string
}

const ResetPasswordForm = memo((props: ResetPasswordProps) => {
  const { className } = props

  const dispatch = useAppDispatch()
  const isCode = useIsCode()

  return (
    <AuthFormTemplate
      title="Смена пароля"
      paragraph="Введите данные, чтобы сменить пароль учетной записи"
      button="Сменить"
      resolver={resetPasswordFormResolver(isCode)}
      onSubmit={(data) => dispatch(resetPassword(data))}
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

export default ResetPasswordForm
