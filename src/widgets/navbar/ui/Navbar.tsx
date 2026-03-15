import cls from './Navbar.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useCallback } from 'react'
import { ThemeSwitcher } from '@/features/switch-theme'
import { Select } from '@/shared/ui/Select/Select'
import { useLocation, useNavigate } from 'react-router-dom'
import { Logo } from '@/shared/ui/Logo/Logo'
import { Block } from '@/shared/ui/Block/Block'
import { navbarSelectConfig } from '../lib/navbarSelectConfig'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { UserMenu } from '../../user-menu'
import { getAppRoute, getAuthRoute } from '@/shared/lib/router/getRoute'
import { Authorized, UnAuthorized } from '@/features/access-control'

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
      <Select
        className={cls.select}
        onSelect={handleSelect}
        selectedValue={pathname}
        options={navbarSelectConfig}
      />
      <UnAuthorized>
        <Button
          onClick={() => navigate(getAuthRoute(['login']))}
          className={cls.button}
        >
          Вход
        </Button>
        <Button
          onClick={() => navigate(getAuthRoute(['register']))}
          className={cls.button}
          theme={ButtonTheme.OUTLINE}
        >
          Регистрация
        </Button>
      </UnAuthorized>
      <Authorized>
        <Button
          onClick={() => navigate(getAppRoute(['profiles']))}
          className={cls.button}
        >
          Профили
        </Button>
        <UserMenu />
      </Authorized>
      <ThemeSwitcher className={cls.themeSwitcher} />
    </Block>
  )
})
