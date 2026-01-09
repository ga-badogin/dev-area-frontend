import { ACCESS_TOKEN_KEY } from '@/shared/consts/localestorage'
import { Navigate } from 'react-router-dom'
import { getAppRoute } from '../../../../shared/lib/router/getRoute'
import { ReactNode } from 'react'

interface RequireAuthProps {
  unAuthOnly?: boolean
  children: ReactNode
}

export const RequireAuth = (props: RequireAuthProps) => {
  const { unAuthOnly, children } = props

  const hasToken = Boolean(localStorage.getItem(ACCESS_TOKEN_KEY))

  if (unAuthOnly && hasToken) {
    return <Navigate to={getAppRoute(['main'])} />
  }

  return children
}
