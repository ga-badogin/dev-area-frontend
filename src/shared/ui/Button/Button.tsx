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
  fontSize?: ValueOf<typeof Sizes>
  isLoading?: boolean
  readOnly?: boolean
  error?: string
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    theme = ButtonTheme.MAIN,
    fontSize = Sizes.M,
    type = 'button',
    children,
    isLoading,
    readOnly = false,
    error,
    disabled,
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
        cls[fontSize],
        className
      ])}
      disabled={isLoading || readOnly || disabled}
      type={type}
      {...otherProps}
    >
      {children}
      {isLoading && <Loader size="80%" id={cls.loader} />}
    </button>
  )
})
