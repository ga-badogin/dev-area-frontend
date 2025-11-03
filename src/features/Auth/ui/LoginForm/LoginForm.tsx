import cls from './LoginForm.module.scss'
import { memo } from 'react'
import { Input } from '@/shared/ui/Input/Input'
import { Button } from '@/shared/ui/Button/Button'
import { useForm } from 'react-hook-form'
import { classNames } from '@/shared/lib/classNames/classNames'
import { loginFormResolver } from '../../lib/validation/resolvers/loginFormResolver'
import { useLoginMutation } from '../../api/authApi'
import { CodeInput } from '@/shared/ui/CodeInput/CodeInput'
import MailIcon from '@/shared/assets/icons/InputMail.svg'
import LockIcon from '@/shared/assets/icons/InputLock.svg'

interface LoginProps {
  className?: string
}

const LoginForm = memo((props: LoginProps) => {
  const { className } = props

  const [login] = useLoginMutation()

  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm({ resolver: loginFormResolver, mode: 'onChange' })

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <form
      className={classNames(cls.loginForm, {}, [className])}
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
        placeholder="Пароль"
        type="password"
        className={cls.input}
        {...register('password')}
      />
      {errors.password?.message}

      <CodeInput control={control} name={'code'} />
      {errors.code?.message}

      <Button>Войти</Button>
    </form>
  )
})

export default LoginForm
