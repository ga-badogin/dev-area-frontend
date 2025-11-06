import cls from './AuthFormWrapper.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { Text } from '@/shared/ui/Text/Text'
import { locationAuthText } from '../../model/consts/authFormWrapper'

interface AuthFormWrapperProps {
  className?: string
  children: ReactNode
}

export const AuthFormWrapper = (props: AuthFormWrapperProps) => {
  const { className, children } = props

  const { pathname } = useLocation()

  return (
    <div className={classNames(cls.authFormWrapper, {}, [className])}>
      {/*<NavLink to="/auth/login">login</NavLink>*/}
      {/*<NavLink to="/auth/register">register</NavLink>*/}
      {/*<NavLink to="/auth/reset-password">reset-password</NavLink>*/}
      <Text {...locationAuthText[pathname]} />
      {children}
    </div>
  )
}
