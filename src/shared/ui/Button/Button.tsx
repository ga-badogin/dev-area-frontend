import cls from './Button.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ButtonHTMLAttributes, memo } from 'react'
import { Loader } from '../Loader/Loader'
import { ValueOf } from '@/shared/types'
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
}

export const Button = memo((props: ButtonProps) => {
  const {
    className,
    theme = ButtonTheme.MAIN,
    size = Sizes.M,
    type = 'button',
    children,
    isLoading,
    ...otherProps
  } = props

  return (
    <button
      className={classNames(cls.button, {}, [className, cls[theme], cls[size]])}
      disabled={isLoading}
      type={type}
      {...otherProps}
    >
      {isLoading ? <Loader size="80%" /> : children}
    </button>
  )
})
