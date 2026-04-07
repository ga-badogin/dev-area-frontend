import { ReactNode } from 'react'
import { useGetMeQuery } from '@/entities/user'
import { NavbarSkeleton } from '@/widgets/navbar'
import { CreateProfilePageAsync } from '@/pages/CreateProfilePage'
import { useLazyPreload } from '@/shared/lib/hooks/useLazyPreload/useLazyPreload'

interface AuthProviderProps {
  children: ReactNode
}

export const AppLoader = (props: AuthProviderProps) => {
  const { children } = props

  const { isFetching, data } = useGetMeQuery()

  const { isPreloading } = useLazyPreload(
    Boolean(data && !data.profile),
    CreateProfilePageAsync.preload
  )

  if (isFetching || isPreloading) return <NavbarSkeleton />

  return children
}
