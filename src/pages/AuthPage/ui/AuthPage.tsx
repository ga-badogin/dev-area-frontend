import cls from './AuthPage.module.scss'
import { memo, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import {
  AuthFormWrapper,
  authReducer,
  LoginFormAsync,
  LoginFormSkeleton,
  RegisterFormAsync,
  RegisterFormSkeleton,
  ResetPasswordFormAsync,
  ResetPasswordFormSkeleton
} from '@/features/Auth'
import {
  DynamicModuleLoader,
  TReducersList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const reducers: TReducersList = {
  auth: authReducer
}

interface AuthPageProps {
  className?: string
}

const AuthPage = memo((props: AuthPageProps) => {
  const { className } = props

  return (
    <div className={cls.authPage}>
      <DynamicModuleLoader reducers={reducers}>
        <AuthFormWrapper>
          <Routes>
            <Route
              path="login"
              element={
                <Suspense key="login" fallback={<LoginFormSkeleton />}>
                  <LoginFormAsync />
                </Suspense>
              }
            />
            <Route
              path="register"
              element={
                <Suspense key="register" fallback={<RegisterFormSkeleton />}>
                  <RegisterFormAsync />
                </Suspense>
              }
            />
            <Route
              path="reset-password"
              element={
                <Suspense
                  key="reset-password"
                  fallback={<ResetPasswordFormSkeleton />}
                >
                  <ResetPasswordFormAsync />
                </Suspense>
              }
            />
            <Route path="/" element={<Navigate to="login" />} />
          </Routes>
        </AuthFormWrapper>
      </DynamicModuleLoader>
    </div>
  )
})

export default AuthPage
