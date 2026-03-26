import { ReactNode } from 'react'
import { useHasProfile } from '@/entities/user'
import { Navigate } from 'react-router-dom'
import {
  getAppRoute,
  getCreateProfileRoute
} from '@/shared/lib/router/getRoute'

interface RequireAuthProps {
  onboarding?: boolean
  children: ReactNode
}

export const RequireProfile = (props: RequireAuthProps) => {
  const { children, onboarding } = props

  const hasProfile = useHasProfile()

  if (hasProfile !== undefined) {
    if (!hasProfile && !onboarding) {
      return <Navigate to={getCreateProfileRoute(['welcome'])} replace />
    }

    if (hasProfile && onboarding) {
      return <Navigate to={getAppRoute(['searchProfile'])} replace />
    }
  }

  return children
}
