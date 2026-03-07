import { ReactNode } from 'react'
import { useIsAuth } from '@/entities/user'
import { Navigate } from 'react-router-dom'
import { getAppRoute, getAuthRoute } from '@/shared/lib/router/getRoute'

interface RequireAuthProps {
  unAuthOnly?: boolean
  authOnly?: boolean
  children: ReactNode
}

export const RequireAuth = (props: RequireAuthProps) => {
  const { unAuthOnly, children, authOnly } = props

  const isAuth = useIsAuth()

  if (isAuth !== undefined) {
    if (unAuthOnly && isAuth) {
      return <Navigate to={getAppRoute(['main'])} replace />
    }

    if (authOnly && !isAuth) {
      return <Navigate to={getAuthRoute(['login'])} replace />
    }
  }

  return children
}
