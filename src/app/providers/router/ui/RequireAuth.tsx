import { Navigate, useLocation } from 'react-router-dom'
import { TAppRoutesProps } from '../types/router'
import { getRoute } from '@/shared/lib/router/getRoute'

interface IRequireAuthProps {
  route: TAppRoutesProps
}

export const RequireAuth = (props: IRequireAuthProps) => {
  const { element, unAuthOnly } = props.route

  const location = useLocation()

  if (unAuthOnly && localStorage.getItem(__ACCESS_TOKEN_KEY__)) {
    return <Navigate to={getRoute(['main'])} />
  }

  return element
}
