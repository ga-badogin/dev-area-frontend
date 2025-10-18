import cls from './AuthPage.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { LoginRegisterSlider } from '@/features/LoginRegister'

interface AuthPageProps {
  className?: string
}

const AuthPage = memo((props: AuthPageProps) => {
  const { className } = props

  return (
    <div className={classNames(cls.authPage, {}, [className])}>
      <LoginRegisterSlider />
    </div>
  )
})

export default AuthPage
