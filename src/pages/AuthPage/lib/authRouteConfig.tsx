import { TAuthRoutes, TRouteConfig } from '@/shared/lib/router/types'
import { getAuthRoute } from '@/shared/lib/router/getRoute'
import { LoginFormAsync } from '@/features/login'
import { RegisterFormAsync } from '@/features/register'
import { ResetPasswordFormAsync } from '@/features/reset-password'
import { Navigate } from 'react-router-dom'
import { AuthFormTemplateSkeleton } from '@/entities/auth'

export const authRouteConfig: TRouteConfig<keyof TAuthRoutes> = {
  login: {
    path: getAuthRoute(['login'], 'path'),
    element: <LoginFormAsync />,
    fallback: <AuthFormTemplateSkeleton />
  },
  register: {
    path: getAuthRoute(['register'], 'path'),
    element: <RegisterFormAsync />,
    fallback: <AuthFormTemplateSkeleton length={3} />
  },
  resetPassword: {
    path: getAuthRoute(['resetPassword'], 'path'),
    element: <ResetPasswordFormAsync />,
    fallback: <AuthFormTemplateSkeleton />
  },
  index: {
    path: getAuthRoute(['index']),
    element: <Navigate to={getAuthRoute(['login'])} />
  }
}
