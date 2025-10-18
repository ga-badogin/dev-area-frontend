import { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'

interface IRequireAuthProps {
  children: ReactNode
}

export const RequireAuth = (props: IRequireAuthProps) => {
  const { children } = props

  const location = useLocation()

  // if () {
  //   return (
  //     <Navigate to={getRoute(['main'])} state={{ from: location }} replace />
  //   )
  // }

  return children
}
