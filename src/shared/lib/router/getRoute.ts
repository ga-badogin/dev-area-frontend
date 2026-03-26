import { TKeyWithParams } from '@/shared/types'
import { TAppRoutes, TAuthRoutes, TOnboardingRoutes } from './types'

export const getAppRoute = ([path, params]: TKeyWithParams<TAppRoutes>) => {
  switch (path) {
    case 'auth':
      return '/auth/*'
    case 'searchProfile':
      return '/search-profile'
    case 'profile':
      return `/profile/${params.username}`
    case 'createProfile':
      return '/create-profile/*'
    case 'other':
      return '*'
  }
}

export const getAuthRoute = (
  [path]: TKeyWithParams<TAuthRoutes>,
  type: 'nav' | 'path' = 'nav'
) => {
  const parentRoute = type === 'nav' ? '/auth' : ''

  switch (path) {
    case 'login':
      return `${parentRoute}/login`
    case 'register':
      return `${parentRoute}/register`
    case 'resetPassword':
      return `${parentRoute}/reset-password`
    case 'index':
      return '/'
  }
}

export const getCreateProfileRoute = (
  [path]: TKeyWithParams<TOnboardingRoutes>,
  type: 'nav' | 'path' = 'nav'
) => {
  const parentRoute = type === 'nav' ? '/create-profile' : ''

  switch (path) {
    case 'welcome':
      return `${parentRoute}/welcome`
    case 'about':
      return `${parentRoute}/about`
    case 'experience':
      return `${parentRoute}/experience`
    case 'education':
      return `${parentRoute}/education`
    case 'skill':
      return `${parentRoute}/skill`
    case 'index':
      return '/'
  }
}
