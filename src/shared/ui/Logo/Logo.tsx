import cls from './Logo.module.scss'
import { memo } from 'react'
import { Title } from '../Title/Title'
import { Sizes } from '@/shared/consts/ui'
import { classNames } from '@/shared/lib/classNames/classNames'

interface LogoProps {
  className?: string
}

export const Logo = memo((props: LogoProps) => {
  const { className } = props

  return (
    <Title
      size={Sizes.XL}
      className={classNames(cls.logo, {}, [className])}
      as="h1"
    >
      DevArea
    </Title>
  )
})
