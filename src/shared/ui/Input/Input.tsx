import cls from './Input.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { FC, InputHTMLAttributes, memo, SVGProps } from 'react'
import { Text, TextTheme } from '../Text/Text'

export enum InputTheme {
  MAIN = 'main'
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: FC<SVGProps<SVGSVGElement>>
  theme?: InputTheme
  error?: string
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    Icon,
    type = 'text',
    theme = InputTheme.MAIN,
    error,
    ...otherProps
  } = props

  return (
    <div className={className}>
      <div className={cls.inputWrapper}>
        <input
          className={classNames(cls.input, { [cls.error]: error }, [
            cls[theme]
          ])}
          type={type}
          autoComplete="off"
          {...otherProps}
        />
        {Icon && <Icon className={cls.icon} />}
      </div>

      {error && (
        <ul className={cls.errorList}>
          {error.split('/').map((error, index) => (
            <li className={cls.listItem} key={index}>
              <Text theme={TextTheme.ERROR} paragraph={error} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
})
