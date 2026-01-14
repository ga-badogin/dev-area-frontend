import cls from './Logo.module.scss'
import { memo } from 'react'
import { Title } from '../Title/Title'
import { Sizes } from '@/shared/consts/ui'

interface LogoProps {
  className?: string
}

export const Logo = memo((props: LogoProps) => {
  const { className } = props

  return (
    <Title size={Sizes.XL} className={cls.logo} as="h1">
      DevArea
    </Title>
  )
})
