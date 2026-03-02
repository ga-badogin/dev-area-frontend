import { Navigate } from 'react-router-dom'
import { ReactNode } from 'react'
import { ACCESS_TOKEN_KEY } from '@/shared/consts/localestorage'
import { getAppRoute, getOnboardingRoute } from '@/shared/lib/router/getRoute'
import { useHasProfile } from '@/entities/profile'

interface RequireAuthProps {
  onboarding?: boolean
  children: ReactNode
}

export const RequireProfile = (props: RequireAuthProps) => {
  const { children, onboarding } = props

  const hasToken = Boolean(localStorage.getItem(ACCESS_TOKEN_KEY))

  const { data: hasProfile } = useHasProfile(undefined, {
    skip: !hasToken
  })

  if (hasProfile !== undefined) {
    if (!hasProfile && !onboarding) {
      return <Navigate to={getOnboardingRoute(['welcome'])} replace />
    }

    if (hasProfile && onboarding) {
      return <Navigate to={getAppRoute(['main'])} replace />
    }
  }

  return children
}
