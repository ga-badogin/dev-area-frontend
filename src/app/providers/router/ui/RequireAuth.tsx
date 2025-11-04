import { TAppRoutesProps } from '../types/router'
import { getRoute } from '@/shared/lib/router/getRoute'
import { ACCESS_TOKEN_KEY } from '@/shared/consts/localestorage'
import { Navigate } from 'react-router-dom'
import { useIsAuth } from '@/features/Auth'

interface IRequireAuthProps {
  route: TAppRoutesProps
}

export const RequireAuth = (props: IRequireAuthProps) => {
  const { element, unAuthOnly } = props.route

  useIsAuth()

  const hasToken = Boolean(localStorage.getItem(ACCESS_TOKEN_KEY))

  if (unAuthOnly && hasToken) {
    return <Navigate to={getRoute(['main'])} />
  }

  return element
}
