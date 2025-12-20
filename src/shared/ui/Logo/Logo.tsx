import cls from './Logo.module.scss'
import { memo } from 'react'
import { Text } from '../Text/Text'

interface LogoProps {
  className?: string
}

export const Logo = memo((props: LogoProps) => {
  const { className } = props

  return <Text className={cls.logo} title="DevArea" />
})
