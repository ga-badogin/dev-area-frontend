import cls from './ResetPassword.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Input, InputTheme } from '@/shared/ui/Input/Input'
import InputUser from '@/shared/assets/icons/InputUser.svg'
import InputLock from '@/shared/assets/icons/InputLock.svg'
import { Button } from '@/shared/ui/Button/Button'
import { useForm } from 'react-hook-form'

interface ResetPasswordProps {
  className?: string
}

export const ResetPassword = memo((props: ResetPasswordProps) => {
  const { className } = props

  const { register, handleSubmit } = useForm()

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <div className={classNames(cls.resetPassword, {}, [className])}>
      <form onSubmit={onSubmit}>
        <Input
          theme={InputTheme.ICON}
          Image={InputUser}
          placeholder="Почта"
          {...register('email')}
        />
        <Input
          theme={InputTheme.ICON}
          Image={InputLock}
          placeholder="Новый пароль"
          type="password"
          {...register('password')}
        />
        <Button>Сменить пароль</Button>
      </form>
    </div>
  )
})
