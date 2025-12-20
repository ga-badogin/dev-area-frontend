import cls from './ThemeSwitcher.module.scss'
import { memo } from 'react'
import { Toggle } from '@/shared/ui/Toggle/Toggle'
import { bindActionCreators } from '@reduxjs/toolkit'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { AppTheme, themeActions, useTheme } from '@/entities/theme'
import MoonIcon from '@/shared/assets/icons/MoonIcon.svg'
import SunIcon from '@/shared/assets/icons/SunIcon.svg'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo((props: ThemeSwitcherProps) => {
  const dispatch = useAppDispatch()
  const { setTheme } = bindActionCreators(themeActions, dispatch)

  const theme = useTheme()

  return (
    <Toggle
      currentValue={theme}
      onToggle={setTheme}
      values={[
        {
          content: <MoonIcon className={cls.moonIcon} />,
          value: AppTheme.DARK
        },
        {
          content: <SunIcon className={cls.sunIcon} />,
          value: AppTheme.LIGHT
        }
      ]}
    />
  )
})
