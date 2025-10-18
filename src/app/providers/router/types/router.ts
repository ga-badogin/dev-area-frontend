import { RouteProps } from 'react-router-dom'

export type TAppRoutesProps = RouteProps & {
  authOnly?: boolean
}

export type TAppRoutes = keyof TRouteParams

export type TRouteParams = {
  mock: { mock: undefined }
}
