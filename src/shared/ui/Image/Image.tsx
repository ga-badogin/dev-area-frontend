import cls from './Image.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import ImageIcon from '@/shared/assets/icons/Image.svg'
import {
  CSSProperties,
  FC,
  ImgHTMLAttributes,
  memo,
  SVGProps,
  useEffect,
  useState
} from 'react'

interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  className?: string
  value?: File | string
  FallbackImage?: FC<SVGProps<SVGSVGElement>>
}

export const Image = memo((props: ImageProps) => {
  const { className, value, alt, width, height, FallbackImage, ...otherProps } =
    props

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
      {src ? (
        <img
          className={classNames(cls.image, {}, [className])}
          src={src}
          alt={alt}
          {...otherProps}
        />
      ) : FallbackImage ? (
        <FallbackImage className={cls.icon} />
      ) : (
        <ImageIcon className={cls.icon} />
      )}
    </div>
  )
})
