import cls from './Login.module.scss'
import { memo } from 'react'
import { Input, InputTheme } from '@/shared/ui/Input/Input'
import InputUser from '@/shared/assets/icons/InputUser.svg'
import InputLock from '@/shared/assets/icons/InputLock.svg'
import { Button } from '@/shared/ui/Button/Button'
import { useForm } from 'react-hook-form'

interface LoginProps {
  className?: string
}

export const Login = memo((props: LoginProps) => {
  const { className } = props

  const { register, handleSubmit } = useForm()

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <div className={cls.login}>
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
          placeholder="Пароль"
          type="password"
          {...register('password')}
        />
        <Button>Войти</Button>
      </form>
    </div>
  )
})
