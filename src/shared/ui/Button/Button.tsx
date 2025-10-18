import cls from './Button.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ButtonHTMLAttributes, CSSProperties, memo } from 'react'

export enum ButtonTheme {
  MAIN = 'main'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme
  height?: string | number
  width?: string | number
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    theme = ButtonTheme.MAIN,
    children,
    height,
    width,
    ...otherProps
  } = props

  const styles: CSSProperties = {
    height,
    width
  }

  return (
    <button
      className={classNames(cls.button, {}, [className, cls[theme]])}
      style={styles}
      {...otherProps}
    >
      {children}
    </button>
  )
})
