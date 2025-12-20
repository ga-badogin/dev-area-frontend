import cls from './Navbar.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useCallback, useState } from 'react'
import { ThemeSwitcher } from '@/features/switch-theme'
import { Select } from '@/shared/ui/Select/Select'
import { useLocation, useNavigate } from 'react-router-dom'
import { Logo } from '@/shared/ui/Logo/Logo'

interface NavbarProps {
  className?: string
}

export const Navbar = memo((props: NavbarProps) => {
  const { className } = props

  const { pathname } = useLocation()
  const navigate = useNavigate()

  const [selectedRoute, setSelectedRoute] = useState(pathname)

  const handleSelect = useCallback((value: string) => {
    setSelectedRoute(value)
    navigate(value)
  }, [])

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <Logo />
      <Select
        className={cls.select}
        onSelect={handleSelect}
        selectedValue={selectedRoute}
        options={[
          { content: 'Вход', value: '/auth/login' },
          { content: 'Регистрация', value: '/auth/register' },
          { content: 'Смена пароля', value: '/auth/reset-password' }
        ]}
      />
      <ThemeSwitcher />
    </div>
  )
})
