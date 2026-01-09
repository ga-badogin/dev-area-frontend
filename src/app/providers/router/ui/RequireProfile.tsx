import { Navigate } from 'react-router-dom'
import { getAppRoute } from '../../../../shared/lib/router/getRoute'
import { ReactNode } from 'react'
import { useHasProfile } from '@/entities/profile'

interface RequireProfileProps {
  onboarding?: boolean
  children: ReactNode
}

export const RequireProfile = (props: RequireProfileProps) => {
  const { onboarding, children } = props

  const { data: hasProfile, isLoading } = useHasProfile()

  if (isLoading) {
    return null
  }

  if (!hasProfile && !onboarding) {
    return <Navigate to={getAppRoute(['onboarding'])} />
  } else if (hasProfile && onboarding) {
    return <Navigate to={getAppRoute(['main'])} />
  }

  return children
}
