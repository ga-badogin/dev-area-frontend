import cls from './Input.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { CSSProperties, FC, InputHTMLAttributes, memo, SVGProps } from 'react'

export enum InputTheme {
  MAIN = 'main'
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  theme?: InputTheme
  height?: string
  width?: string
  Image: FC<SVGProps<SVGSVGElement>>
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    height,
    width,
    Image,
    type = 'text',
    ...otherProps
  } = props

  const styles: CSSProperties = {
    height,
    width,
    paddingLeft: `${height}`
  }

  const imageStyles: CSSProperties = {
    left: `calc(${height} / 2.3)`,
    height: `calc(${height} / 2.3)`
  }

  return (
    <div className={cls.inputWrapper}>
      <input
        style={styles}
        className={classNames(cls.input, {}, [className])}
        type={type}
        {...otherProps}
      />
      <Image style={imageStyles} className={cls.image} />
    </div>
  )
})
