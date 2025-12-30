import { TAuthRoutes, TRouteConfig } from '@/shared/lib/router/types'
import { getAuthRoute } from '@/shared/lib/router/getRoute'
import { LoginFormAsync, LoginFormSkeleton } from '@/features/login'
import { RegisterFormAsync, RegisterFormSkeleton } from '@/features/register'
import {
  ResetPasswordFormAsync,
  ResetPasswordFormSkeleton
} from '@/features/reset-password'
import { Navigate } from 'react-router-dom'

export const authRouteConfig: TRouteConfig<keyof TAuthRoutes> = {
  login: {
    path: getAuthRoute(['login'], 'path'),
    element: <LoginFormAsync />,
    fallback: <LoginFormSkeleton />
  },
  register: {
    path: getAuthRoute(['register'], 'path'),
    element: <RegisterFormAsync />,
    fallback: <RegisterFormSkeleton />
  },
  resetPassword: {
    path: getAuthRoute(['resetPassword'], 'path'),
    element: <ResetPasswordFormAsync />,
    fallback: <ResetPasswordFormSkeleton />
  },
  index: {
    path: getAuthRoute(['index']),
    element: <Navigate to={getAuthRoute(['login'])} />
  }
}
