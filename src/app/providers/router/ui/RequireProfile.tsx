import { Navigate } from 'react-router-dom'
import { getAppRoute } from '@/shared/lib/router/getRoute'
import { ReactNode } from 'react'
import { useHasProfile } from '@/entities/profile'
import { ACCESS_TOKEN_KEY } from '@/shared/consts/localestorage'

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
      return <Navigate to={getAppRoute(['onboarding'])} replace />
    }

    if (hasProfile && onboarding) {
      return <Navigate to={getAppRoute(['main'])} replace />
    }
  }

  return children
}
