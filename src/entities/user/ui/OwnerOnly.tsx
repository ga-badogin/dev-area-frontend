import { classNames } from '@/shared/lib/classNames/classNames'
import { ReactNode } from 'react'
import { useUserInfo } from '../model/selectors/getUserInfo'

interface OwnerOnlyProps {
  className?: string
  userId: string
  children?: ReactNode
}

export const OwnerOnly = (props: OwnerOnlyProps) => {
  const { className, userId, children } = props

  const userInfo = useUserInfo()

  return userInfo?.id === userId ? children : undefined
}
