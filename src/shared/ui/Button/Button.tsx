import cls from './Button.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ButtonHTMLAttributes, memo } from 'react'
import { Loader } from '../Loader/Loader'

export enum ButtonTheme {
  MAIN = 'main'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme
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
      {...otherProps}
    >
      {isLoading ? <Loader height="60%" /> : children}
    </button>
  )
})
