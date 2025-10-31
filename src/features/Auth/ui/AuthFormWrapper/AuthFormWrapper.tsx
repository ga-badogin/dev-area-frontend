import cls from './AuthFormWrapper.module.scss'
import { ReactNode } from 'react'
import { Text } from '@/shared/ui/Text/Text'
import { useLocation } from 'react-router-dom'
import { locationText } from '../../model/consts/authFormWrapper'

interface AuthFormWrapperProps {
  children: ReactNode
}

export const AuthFormWrapper = (props: AuthFormWrapperProps) => {
  const { children } = props

  const { pathname } = useLocation()

  return (
    <div className={cls.authFormWrapper}>
      <Text className={cls.text} {...locationText[pathname]} />
      {children}
    </div>
  )
}
