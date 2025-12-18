import cls from './Button.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ButtonHTMLAttributes, memo } from 'react'
import { Loader } from '../Loader/Loader'

export const ButtonTheme = {
  MAIN: 'main',
  CLEAR: 'clear'
} as const

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: (typeof ButtonTheme)[keyof typeof ButtonTheme]
  isLoading?: boolean
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    theme = ButtonTheme.MAIN,
    children,
    isLoading,
    ...otherProps
  } = props

  return (
    <button
      className={classNames(cls.button, {}, [className, cls[theme]])}
      disabled={isLoading}
      {...otherProps}
    >
      {isLoading ? <Loader size="80%" /> : children}
    </button>
  )
})
