import { AuthPageAsync } from '@/pages/AuthPage'
import { MainPage } from '@/pages/MainPage'
import { TAppRoutes, TRouteConfig } from '@/shared/lib/router/types'
import { getAppRoute } from '@/shared/lib/router/getRoute'
import { Navigate } from 'react-router-dom'

export const appRouteConfig: TRouteConfig<keyof TAppRoutes> = {
  auth: {
    path: getAppRoute(['auth']),
    element: <AuthPageAsync />,
    unAuthOnly: true
  },
  main: {
    path: getAppRoute(['main']),
    element: <MainPage />
  },
  other: {
    path: getAppRoute(['other']),
    element: <Navigate to={getAppRoute(['main'])} />
  }
}
