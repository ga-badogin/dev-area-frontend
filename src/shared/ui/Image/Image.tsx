import cls from './Image.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ImgHTMLAttributes, memo, useEffect, useState } from 'react'

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string
  value?: File | string
  fallback?: string
}

export const Image = memo((props: ImageProps) => {
  const { className, value, fallback = '', alt, ...otherProps } = props

  const [src, setSrc] = useState<string | null>(null)

  useEffect(() => {
    if (!value) {
      setSrc(null)
    } else if (typeof value === 'string') {
      setSrc(value)
    } else {
      const objectUrl = URL.createObjectURL(value)
      setSrc(objectUrl)

      return () => URL.revokeObjectURL(objectUrl)
    }
  }, [value])

  return (
    <img
      className={classNames(cls.icon, {}, [className])}
      src={src ?? fallback}
      alt={alt}
      {...otherProps}
    />
  )
})
