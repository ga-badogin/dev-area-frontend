import cls from './Navbar.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useCallback } from 'react'
import { ThemeSwitcher } from '@/features/switch-theme'
import { Select } from '@/shared/ui/Select/Select'
import { useLocation, useNavigate } from 'react-router-dom'
import { Logo } from '@/shared/ui/Logo/Logo'
import { Block } from '@/shared/ui/Block/Block'
import { navbarSelectConfig } from '../lib/navbarSelectConfig'
import { Button } from '@/shared/ui/Button/Button'
import { UserMenu } from '../../user-menu'
import { getAppRoute } from '@/shared/lib/router/getRoute'
import { Authorized } from '@/features/access-control'

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
      <Authorized>
        <Button
          onClick={() => navigate(getAppRoute(['searchProfile']))}
          className={cls.button}
        >
          Профили
        </Button>
      </Authorized>
      <ThemeSwitcher className={cls.themeSwitcher} />
      <UserMenu />
    </Block>
  )
})
