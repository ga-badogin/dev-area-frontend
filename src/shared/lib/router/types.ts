import { RouteProps } from 'react-router-dom'
import { ReactNode } from 'react'

export type TRouteProps = RouteProps & {
  authOnly?: boolean
  unAuthOnly?: boolean
  fallback?: ReactNode
}

export type TRouteConfig<T extends string> = Record<T, TRouteProps>

export type TAppRoutes = {
  auth: null
  main: null
  other: null
}

export type TAuthRoutes = {
  login: null
  register: null
  resetPassword: null
  index: null
}
