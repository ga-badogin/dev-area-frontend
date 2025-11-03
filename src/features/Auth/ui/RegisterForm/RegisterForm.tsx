import cls from './RegisterForm.module.scss'
import { memo, useEffect, useState } from 'react'
import { Input } from '@/shared/ui/Input/Input'
import { Button } from '@/shared/ui/Button/Button'
import { useForm } from 'react-hook-form'
import { classNames } from '@/shared/lib/classNames/classNames'
import { registerFormResolver } from '../../lib/validation/resolvers/registerFormResolver'
import { useRegisterMutation } from '../../api/authApi'
import MailIcon from '@/shared/assets/icons/InputMail.svg'
import LockIcon from '@/shared/assets/icons/InputLock.svg'
import UserIcon from '@/shared/assets/icons/InputUser.svg'
import { CodeInput } from '@/shared/ui/CodeInput/CodeInput'

interface RegisterProps {
  className?: string
}

const RegisterForm = memo((props: RegisterProps) => {
  const { className } = props

  const [isCode, setIsCode] = useState(false)

  const [register, { isSuccess }] = useRegisterMutation()

  const {
    register: formRegister,
    handleSubmit,
    formState: { errors },
    control
  } = useForm({
    resolver: registerFormResolver,
    mode: 'onChange'
  })

  const onSubmit = handleSubmit((data) => register(data))

  useEffect(() => {
    if (isSuccess && !isCode) setIsCode(true)
  }, [isSuccess])

  return (
    <form
      className={classNames(cls.registerForm, {}, [className])}
      onSubmit={onSubmit}
    >
      <Input
        Icon={UserIcon}
        placeholder="Имя"
        className={cls.input}
        {...formRegister('name')}
      />
      {errors.name?.message}

      <Input
        Icon={UserIcon}
        placeholder="Имя пользователя"
        className={cls.input}
        {...formRegister('username')}
      />
      {errors.username?.message}

      <Input
        Icon={MailIcon}
        placeholder="Почта"
        className={cls.input}
        {...formRegister('email')}
      />
      {errors.email?.message}

      <Input
        Icon={LockIcon}
        placeholder="Пароль"
        type="password"
        className={cls.input}
        {...formRegister('password')}
      />
      {errors.password?.message}

      {isCode && (
        <>
          <CodeInput control={control} name={'code'} />
          {errors.code?.message}
        </>
      )}

      <Button>Регистрация</Button>
    </form>
  )
})

export default RegisterForm
