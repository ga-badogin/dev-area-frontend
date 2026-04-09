import cls from './Navbar.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useCallback } from 'react'
import { ThemeSwitcher } from '@/features/switch-theme'
import { Select } from '@/shared/ui/Select/Select'
import { useLocation, useNavigate } from 'react-router-dom'
import { Logo } from '@/shared/ui/Logo/Logo'
import { Block } from '@/shared/ui/Block/Block'
import { UserMenu } from '../../user-menu'
import { Authorized, UnAuthorized } from '@/features/access-control'
import {
  appRoutesSelectConfig,
  authRoutesSelectConfig
} from '../lib/navbarSelectConfig'

interface NavbarProps {
  className?: string
}

export const Navbar = memo((props: NavbarProps) => {
  const { className } = props

  const { pathname } = useLocation()
  const navigate = useNavigate()

  const handleSelect = useCallback((value: string) => {
    navigate(value)
  }, [])

  return (
    <Block className={classNames(cls.navbar, {}, [className])}>
      <Logo className={cls.logo} />
      <UnAuthorized>
        <Select
          className={cls.authSelect}
          onSelect={handleSelect}
          selectedValue={pathname}
          options={authRoutesSelectConfig}
        />
      </UnAuthorized>
      <Authorized>
        <Select
          className={cls.appSelect}
          onSelect={handleSelect}
          selectedValue={pathname}
          options={appRoutesSelectConfig}
        />
      </Authorized>
      <ThemeSwitcher />
      <UserMenu />
    </Block>
  )
})
