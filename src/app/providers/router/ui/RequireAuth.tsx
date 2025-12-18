import { TAppRoutesProps } from '../types/router'
import { getRoute } from '@/shared/lib/router/getRoute'
import { ACCESS_TOKEN_KEY } from '@/shared/consts/localestorage'
import { Navigate } from 'react-router-dom'

interface IRequireAuthProps {
  route: TAppRoutesProps
}

export const RequireAuth = (props: IRequireAuthProps) => {
  const { element, unAuthOnly } = props.route

  const hasToken = Boolean(localStorage.getItem(ACCESS_TOKEN_KEY))

  if (unAuthOnly && hasToken) {
    return <Navigate to={getRoute(['main'])} />
  }

  return element
}
