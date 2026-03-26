import { ReactNode } from 'react'
import { useGetMeQuery } from '@/entities/user'
import { NavbarSkeleton } from '@/widgets/navbar'

interface AuthProviderProps {
  className?: string
  children: ReactNode
}

export const AppLoader = (props: AuthProviderProps) => {
  const { className, children } = props

  const { isFetching } = useGetMeQuery()

  if (isFetching) return <NavbarSkeleton />

  return children
}
