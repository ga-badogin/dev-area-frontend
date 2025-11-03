import cls from './Input.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { FC, InputHTMLAttributes, memo, SVGProps } from 'react'

export enum InputTheme {
  MAIN = 'main'
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: FC<SVGProps<SVGSVGElement>>
  theme?: InputTheme
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    Icon,
    type = 'text',
    theme = InputTheme.MAIN,
    ...otherProps
  } = props

  return (
    <div className={classNames(cls.inputWrapper, {}, [className])}>
      <input
        className={classNames(cls.input, {}, [cls[theme]])}
        type={type}
        {...otherProps}
      />
      {Icon && <Icon className={cls.icon} />}
    </div>
  )
})
