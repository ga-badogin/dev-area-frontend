import cls from './AuthFormWrapper.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ReactNode, useCallback, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Text } from '@/shared/ui/Text/Text'
import { Select } from '@/shared/ui/Select/Select'
import { locationAuthText } from '@/shared/consts/auth'
import { ThemeSwitcher } from '@/features/switch-theme'

interface AuthFormWrapperProps {
  className?: string
  children: ReactNode
}

export const AuthFormWrapper = (props: AuthFormWrapperProps) => {
  const { className, children } = props

  const { pathname } = useLocation()
  const navigate = useNavigate()

  const [selectedRoute, setSelectedRoute] = useState(pathname)

  const handleSelect = useCallback((value: string) => {
    setSelectedRoute(value)
    navigate(value)
  }, [])

  return (
    <div className={classNames(cls.authFormWrapper, {}, [className])}>
      <Text {...locationAuthText[pathname]} />
      {children}
      <ThemeSwitcher />
      {/*<Select*/}
      {/*  onSelect={handleSelect}*/}
      {/*  selectedValue={selectedRoute}*/}
      {/*  options={[*/}
      {/*    { content: 'Вход', value: '/auth/login' },*/}
      {/*    { content: 'Регистрация', value: '/auth/register' },*/}
      {/*    { content: 'Смена пароля', value: '/auth/reset-password' }*/}
      {/*  ]}*/}
      {/*/>*/}
    </div>
  )
}
