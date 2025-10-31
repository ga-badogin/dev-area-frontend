import cls from './ResetPasswordForm.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Input, InputTheme } from '@/shared/ui/Input/Input'
import InputUser from '@/shared/assets/icons/InputUser.svg'
import InputLock from '@/shared/assets/icons/InputLock.svg'
import { Button } from '@/shared/ui/Button/Button'
import { useForm } from 'react-hook-form'
import { useLazyResetPasswordQuery } from '../../api/authApi'
import { resetPasswordFormResolver } from '../../lib/validation/resolvers/resetPasswordFormResolver'

interface ResetPasswordProps {
  className?: string
}

const ResetPasswordForm = memo((props: ResetPasswordProps) => {
  const { className } = props

  const [resetPassword] = useLazyResetPasswordQuery()

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
        theme={InputTheme.ICON}
        Image={InputUser}
        placeholder="Почта"
        className={cls.input}
        {...register('email')}
      />
      {errors.email?.message}
      <Input
        theme={InputTheme.ICON}
        Image={InputLock}
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
