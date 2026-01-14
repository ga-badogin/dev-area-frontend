import cls from './Icon.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'

interface IconProps {
  className?: string
  src?: string
  size?: string
}

export const Icon = memo((props: IconProps) => {
  const { className, src, size } = props

  return (
    <img
      className={classNames(cls.icon, {}, [className])}
      width={size}
      height={size}
      src={src}
      alt="Icon"
    />
  )
})
