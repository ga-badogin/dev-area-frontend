import { ReactNode } from 'react'
import { useGetMeQuery } from '@/entities/user'

interface AuthProviderProps {
  className?: string
  children: ReactNode
}

export const AuthProvider = (props: AuthProviderProps) => {
  const { className, children } = props

  const { isLoading } = useGetMeQuery()

  if (isLoading) return 'Loading...'

  return children
}
