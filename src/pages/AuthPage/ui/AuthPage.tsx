import cls from './AuthPage.module.scss'
import { memo } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { Login } from '@/features/Login'
import { Register } from '@/features/Register'
import { ResetPassword } from '@/features/ResetPassword'

interface AuthPageProps {
  className?: string
}

const AuthPage = memo((props: AuthPageProps) => {
  const { className } = props

  return (
    <div className={cls.authPage}>
      <div className={cls.formWrapper}>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="/" element={<Navigate to="login" />} />
        </Routes>
      </div>
    </div>
  )
})

export default AuthPage
