import { RouteProps } from 'react-router-dom'

export type TAppRoutesProps = RouteProps & {
  authOnly?: boolean
  unAuthOnly?: boolean
}

export type TAppRoutes = keyof TRouteParams

export type TRouteParams = {
  auth: null
  main: null
}
