import { classNames } from '@/shared/lib/classNames/classNames'
import { useIsAuth } from '@/entities/user'
import { useLocation } from 'react-router-dom'
import { ReactNode } from 'react'

interface AuthorizedProps {
  className?: string
  children: ReactNode
}

export const Authorized = (props: AuthorizedProps) => {
  const { className, children } = props

  const isAuth = useIsAuth()
  const { pathname } = useLocation()

  return isAuth && !pathname.includes('auth') ? children : null
}
