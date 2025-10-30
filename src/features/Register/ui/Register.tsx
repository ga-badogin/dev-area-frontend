import cls from './Register.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Input, InputTheme } from '@/shared/ui/Input/Input'
import InputUser from '@/shared/assets/icons/InputUser.svg'
import InputLock from '@/shared/assets/icons/InputLock.svg'
import InputMail from '@/shared/assets/icons/InputMail.svg'
import { Button } from '@/shared/ui/Button/Button'
import { useForm } from 'react-hook-form'

interface RegisterProps {
  className?: string
}

export const Register = memo((props: RegisterProps) => {
  const { className } = props

  const { register, handleSubmit } = useForm()

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <div className={classNames(cls.register, {}, [className])}>
      <form onSubmit={onSubmit}>
        <Input
          theme={InputTheme.ICON}
          Image={InputUser}
          placeholder="Имя"
          {...register('name')}
        />
        <Input
          theme={InputTheme.ICON}
          Image={InputUser}
          placeholder="Имя пользователя"
          {...register('username')}
        />
        <Input
          theme={InputTheme.ICON}
          Image={InputMail}
          placeholder="Почта"
          {...register('email')}
        />
        <Input
          theme={InputTheme.ICON}
          Image={InputLock}
          placeholder="Пароль"
          type="password"
          {...register('password')}
        />
        <Button>Регистрация</Button>
      </form>
    </div>
  )
})
