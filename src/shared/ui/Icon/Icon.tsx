import cls from './Icon.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ImgHTMLAttributes, memo } from 'react'

interface IconProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string
  src?: string
  size?: string
}

export const Icon = memo((props: IconProps) => {
  const { className, src, size, ...otherProps } = props

  return (
    <img
      className={classNames(cls.icon, {}, [className])}
      width={size}
      height={size}
      src={src}
      alt="Icon"
      {...otherProps}
    />
  )
})
