import { classNames } from '@/shared/lib/classNames/classNames'
import { useIsAuth } from '@/entities/user'
import { useLocation } from 'react-router-dom'
import { ReactNode } from 'react'

interface UnAuthorizedProps {
  className?: string
  children: ReactNode
}

export const UnAuthorized = (props: UnAuthorizedProps) => {
  const { className, children } = props

  const isAuth = useIsAuth()
  const { pathname } = useLocation()

  return !isAuth && !pathname.includes('auth') ? children : null
}
