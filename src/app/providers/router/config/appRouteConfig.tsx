import { TAppRoutes, TRouteConfig } from '@/shared/lib/router/types'
import { getAppRoute } from '@/shared/lib/router/getRoute'
import { Navigate } from 'react-router-dom'
import { ProfilePageAsync, ProfilePageSkeleton } from '@/pages/ProfilePage'
import { AuthPage } from '@/pages/AuthPage'
import {
  SearchProfilePageAsync,
  SearchProfilePageSkeleton
} from '@/pages/SearchProfilePage'
import { CreateProfilePageAsync } from '@/pages/CreateProfilePage'

export const appRouteConfig: TRouteConfig<keyof TAppRoutes> = {
  auth: {
    path: getAppRoute(['auth']),
    element: <AuthPage />,
    unAuthOnly: true
  },
  searchProfile: {
    path: getAppRoute(['searchProfile']),
    element: <SearchProfilePageAsync />,
    fallback: <SearchProfilePageSkeleton />
  },
  profile: {
    path: getAppRoute(['profile', { username: ':username' }]),
    element: <ProfilePageAsync />,
    fallback: <ProfilePageSkeleton />
  },
  createProfile: {
    path: getAppRoute(['createProfile']),
    element: <CreateProfilePageAsync />,
    onboarding: true,
    authOnly: true
  },
  other: {
    path: getAppRoute(['other']),
    element: <Navigate to={getAppRoute(['searchProfile'])} />
  }
}
