import cls from './Navbar.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useCallback } from 'react'
import { ThemeSwitcher } from '@/features/switch-theme'
import { Select } from '@/shared/ui/Select/Select'
import { useLocation, useNavigate } from 'react-router-dom'
import { Logo } from '@/shared/ui/Logo/Logo'
import { Block } from '@/shared/ui/Block/Block'
import { navbarSelectConfig } from '../lib/navbarSelectConfig'
import { getAppRoute } from '@/shared/lib/router/getRoute'

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
      <Logo />
      <Select
        className={cls.select}
        onSelect={handleSelect}
        selectedValue={pathname}
        options={navbarSelectConfig}
      />
      <Select
        className={cls.select}
        onSelect={handleSelect}
        selectedValue={pathname}
        options={[
          { content: 'Main', value: getAppRoute(['main']) },
          {
            content: 'Profile',
            value: getAppRoute(['profile', { username: 'ga-badogin' }])
          }
        ]}
      />
      <ThemeSwitcher className={cls.themeSwitcher} />
    </Block>
  )
})
