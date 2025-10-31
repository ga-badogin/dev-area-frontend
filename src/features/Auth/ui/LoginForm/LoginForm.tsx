import cls from './LoginForm.module.scss'
import { memo } from 'react'
import { Input, InputTheme } from '@/shared/ui/Input/Input'
import InputMail from '@/shared/assets/icons/InputMail.svg'
import InputLock from '@/shared/assets/icons/InputLock.svg'
import { Button } from '@/shared/ui/Button/Button'
import { useForm } from 'react-hook-form'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useLazyLoginQuery } from '../../api/authApi'
import { loginFormResolver } from '../../lib/validation/resolvers/loginFormResolver'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'

interface LoginProps {
  className?: string
}

const LoginForm = memo((props: LoginProps) => {
  const { className } = props

  const [login] = useLazyLoginQuery()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: loginFormResolver, mode: 'onChange' })

  const onSubmit = handleSubmit((data) => login(data))

  return (
    <form
      className={classNames(cls.loginForm, {}, [className])}
      onSubmit={onSubmit}
    >
      <Input
        theme={InputTheme.ICON}
        Image={InputMail}
        placeholder="Почта"
        className={cls.input}
        {...register('email')}
      />
      {errors.email?.message}
      <Input
        theme={InputTheme.ICON}
        Image={InputLock}
        placeholder="Пароль"
        type="password"
        className={cls.input}
        {...register('password')}
      />
      {errors.password?.message}
      <Button>Войти</Button>
    </form>
  )
})

export default LoginForm
