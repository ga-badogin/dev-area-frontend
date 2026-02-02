import cls from './Image.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
  CSSProperties,
  ImgHTMLAttributes,
  memo,
  useEffect,
  useState
} from 'react'

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string
  value?: File | string
}

export const Image = memo((props: ImageProps) => {
  const { className, value, alt, width, height, ...otherProps } = props

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

  const styles: CSSProperties = {
    height,
    width
  }

  return (
    <div style={styles}>
      <img
        className={classNames(cls.image, {}, [className])}
        src={src ?? undefined}
        alt={alt}
        {...otherProps}
      />
    </div>
  )
})
