import { memo, Suspense } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import {
  DynamicModuleLoader,
  TReducersList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { authReducer } from '@/entities/auth'
import { AuthFormWrapper } from '../AuthFormWrapper/AuthFormWrapper'
import { LoginFormAsync, LoginFormSkeleton } from '@/features/login'
import { RegisterFormAsync, RegisterFormSkeleton } from '@/features/register'
import {
  ResetPasswordFormAsync,
  ResetPasswordFormSkeleton
} from '@/features/reset-password'

const reducers: TReducersList = {
  auth: authReducer
}

interface AuthFormProps {
  className?: string
}

export const AuthForm = memo((props: AuthFormProps) => {
  const { className } = props

  return (
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
  )
})
