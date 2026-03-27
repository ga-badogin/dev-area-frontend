import { RouteProps } from 'react-router-dom'
import { ReactNode } from 'react'

export type TRouteProps = RouteProps & {
  authOnly?: boolean
  unAuthOnly?: boolean
  onboarding?: boolean
  fallback?: ReactNode
}

export type TRouteConfig<T extends string> = Record<T, TRouteProps>

export type TAppRoutes = {
  auth: null
  searchProfile: null
  profile: { username: string }
  createProfile: null
  other: null
}

export type TAuthRoutes = {
  login: null
  register: null
  resetPassword: null
  index: null
}
