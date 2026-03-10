import cls from './Button.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ButtonHTMLAttributes, memo } from 'react'
import { Loader } from '../Loader/Loader'
import { Mods, ValueOf } from '@/shared/types'
import { Sizes } from '@/shared/consts/ui'

export const ButtonTheme = {
  MAIN: 'main',
  CLEAR: 'clear',
  OUTLINE: 'outline'
} as const

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ValueOf<typeof ButtonTheme>
  size?: ValueOf<typeof Sizes>
  isLoading?: boolean
  readOnly?: boolean
  error?: string
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    theme = ButtonTheme.MAIN,
    size = Sizes.M,
    type = 'button',
    children,
    isLoading,
    readOnly = false,
    error,
    ...otherProps
  } = props

  const mods: Mods = {
    [cls.readOnly]: readOnly,
    [cls.error]: error
  }

  return (
    <button
      className={classNames(cls.button, mods, [
        cls[theme],
        cls[size],
        className
      ])}
      disabled={isLoading || readOnly}
      type={type}
      {...otherProps}
    >
      {isLoading ? <Loader size="80%" /> : children}
    </button>
  )
})
