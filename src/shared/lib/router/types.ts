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
  main: null
  profile: { username: string }
  onboarding: null
  other: null
}

export type TAuthRoutes = {
  login: null
  register: null
  resetPassword: null
  index: null
}
