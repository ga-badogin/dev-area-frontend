import cls from './Button.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ButtonHTMLAttributes, memo } from 'react'

export enum ButtonTheme {
  MAIN = 'main'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme
}

export const Button = memo((props: ButtonProps) => {
  const { className, theme = ButtonTheme.MAIN, children, ...otherProps } = props

  return (
    <button
      className={classNames(cls.button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  )
})
