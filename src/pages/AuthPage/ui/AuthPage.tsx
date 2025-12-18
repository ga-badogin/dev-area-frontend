import cls from './AuthPage.module.scss'
import { memo } from 'react'
import { AuthForm } from '@/widgets/auth-form'

interface AuthPageProps {
  className?: string
}

const AuthPage = memo((props: AuthPageProps) => {
  const { className } = props

  return (
    <div className={cls.authPage}>
      <AuthForm />
    </div>
  )
})

export default AuthPage
