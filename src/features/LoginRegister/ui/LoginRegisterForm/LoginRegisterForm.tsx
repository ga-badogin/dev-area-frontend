import cls from './LoginRegisterForm.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Button } from '@/shared/ui/Button/Button'
import { Input } from '@/shared/ui/Input/Input'
import ImportLock from '@/shared/assets/icons/InputLock.svg'
import InputUser from '@/shared/assets/icons/InputUser.svg'

interface LoginRegisterFormProps {
  className?: string
}

export const LoginRegisterForm = memo((props: LoginRegisterFormProps) => {
  const { className } = props

  return (
    <div className={classNames(cls.loginRegisterForm, {}, [className])}>
      <Input
        Image={InputUser}
        width="350px"
        height="50px"
        placeholder="Логин"
      />
      <Input
        Image={ImportLock}
        width="350px"
        height="50px"
        placeholder="Пароль"
        type={'password'}
      />
      <Button width="350px" height="50px">
        Войти
      </Button>
    </div>
  )
})
