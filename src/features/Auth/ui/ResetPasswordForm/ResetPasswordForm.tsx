import cls from './ResetPasswordForm.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Input } from '@/shared/ui/Input/Input'
import { Button } from '@/shared/ui/Button/Button'
import { useForm } from 'react-hook-form'
import { resetPasswordFormResolver } from '../../lib/validation/resolvers/resetPasswordFormResolver'
import { useResetPasswordMutation } from '../../api/authApi'
import MailIcon from '@/shared/assets/icons/InputMail.svg'
import LockIcon from '@/shared/assets/icons/InputLock.svg'

interface ResetPasswordProps {
  className?: string
}

const ResetPasswordForm = memo((props: ResetPasswordProps) => {
  const { className } = props

  const [resetPassword] = useResetPasswordMutation()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: resetPasswordFormResolver,
    mode: 'onChange'
  })

  const onSubmit = handleSubmit((data) => resetPassword(data))

  return (
    <form
      className={classNames(cls.resetPasswordForm, {}, [className])}
      onSubmit={onSubmit}
    >
      <Input
        Icon={MailIcon}
        placeholder="Почта"
        className={cls.input}
        {...register('email')}
      />
      {errors.email?.message}
      <Input
        Icon={LockIcon}
        placeholder="Новый пароль"
        type="password"
        className={cls.input}
        {...register('password')}
      />
      {errors.password?.message}
      <Button>Сменить пароль</Button>
    </form>
  )
})

export default ResetPasswordForm
