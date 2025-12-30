import { TKeyWithParams } from '@/shared/types'
import { TAppRoutes, TAuthRoutes } from './types'

export const getAppRoute = ([path]: TKeyWithParams<TAppRoutes>) => {
  switch (path) {
    case 'auth':
      return '/auth/*'
    case 'main':
      return '/'
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
