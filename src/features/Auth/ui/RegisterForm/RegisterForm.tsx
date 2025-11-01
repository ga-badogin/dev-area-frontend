import cls from './RegisterForm.module.scss'
import { memo } from 'react'
import { Input, InputTheme } from '@/shared/ui/Input/Input'
import InputUser from '@/shared/assets/icons/InputUser.svg'
import InputLock from '@/shared/assets/icons/InputLock.svg'
import InputMail from '@/shared/assets/icons/InputMail.svg'
import { Button } from '@/shared/ui/Button/Button'
import { useForm } from 'react-hook-form'
import { classNames } from '@/shared/lib/classNames/classNames'
import { registerFormResolver } from '../../lib/validation/resolvers/registerFormResolver'
import { useRegisterMutation } from '../../api/authApi'
import { CodeInput } from '@/shared/ui/CodeInput/CodeInput'

interface RegisterProps {
  className?: string
}

const RegisterForm = memo((props: RegisterProps) => {
  const { className } = props

  const [register] = useRegisterMutation()

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: registerFormResolver,
    mode: 'onChange'
  })

  const onSubmit = handleSubmit((data) => console.log(data))

  return (
    <form
      className={classNames(cls.registerForm, {}, [className])}
      onSubmit={onSubmit}
    >
      <Input
        theme={InputTheme.ICON}
        Image={InputUser}
        placeholder="Имя"
        className={cls.input}
        {...formRegister('name')}
      />
      {errors.name?.message}

      <Input
        theme={InputTheme.ICON}
        Image={InputUser}
        placeholder="Имя пользователя"
        className={cls.input}
        {...formRegister('username')}
      />
      {errors.username?.message}

      <Input
        theme={InputTheme.ICON}
        Image={InputMail}
        placeholder="Почта"
        className={cls.input}
        {...formRegister('email')}
      />
      {errors.email?.message}

      <Input
        theme={InputTheme.ICON}
        Image={InputLock}
        placeholder="Пароль"
        type="password"
        className={cls.input}
        {...formRegister('password')}
      />
      {errors.password?.message}

      <CodeInput />

      <Button>Регистрация</Button>
    </form>
  )
})

export default RegisterForm
