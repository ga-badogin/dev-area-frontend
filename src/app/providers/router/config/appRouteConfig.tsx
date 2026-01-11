import { AuthPageAsync } from '@/pages/AuthPage'
import { MainPage } from '@/pages/MainPage'
import { TAppRoutes, TRouteConfig } from '@/shared/lib/router/types'
import { getAppRoute } from '@/shared/lib/router/getRoute'
import { Navigate } from 'react-router-dom'
import { ProfilePageAsync } from '@/pages/ProfilePage'
import { OnboardingPageAsync } from '@/pages/OnboardingPage'

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
  profile: {
    path: getAppRoute(['profile', { username: ':username' }]),
    element: <ProfilePageAsync />,
    authOnly: true
  },
  onboarding: {
    path: getAppRoute(['onboarding']),
    element: <OnboardingPageAsync />,
    onboarding: true,
    authOnly: true
  },
  other: {
    path: getAppRoute(['other']),
    element: <Navigate to={getAppRoute(['main'])} />
  }
}
