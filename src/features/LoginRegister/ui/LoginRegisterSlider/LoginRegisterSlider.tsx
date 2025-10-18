import cls from './LoginRegisterSlider.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useCallback, useState } from 'react'
import { LoginRegisterForm } from '../LoginRegisterForm/LoginRegisterForm'
import { Button } from '@/shared/ui/Button/Button'

interface LoginRegisterSliderProps {
  className?: string
}

type TAuthType = 'login' | 'register'

export const LoginRegisterSlider = memo((props: LoginRegisterSliderProps) => {
  const { className } = props

  const [authMode, setAuthMode] = useState<TAuthType>('login')

  const handleSlide = useCallback(
    (authMode: TAuthType) => () => {
      setAuthMode(authMode)
    },
    [authMode]
  )

  return (
    <div className={classNames(cls.slider, {}, [className, cls[authMode]])}>
      <div className={cls.wrapper}>
        <LoginRegisterForm />
      </div>
      <div className={classNames(cls.cover, {}, [cls[authMode]])}>
        <div className={cls.proposalWrapper}>
          <div className={cls.proposal}>
            <p>У вас еще нет учетной записи?</p>
            <Button width={100} height={30} onClick={handleSlide('register')}>
              Регистрация
            </Button>
          </div>
          <div className={cls.proposal}>
            <p>У вас есть учетная запись?</p>
            <Button width={100} height={30} onClick={handleSlide('login')}>
              Логин
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
})
