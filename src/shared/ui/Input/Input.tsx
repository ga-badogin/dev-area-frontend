import cls from './Input.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { FC, InputHTMLAttributes, memo, SVGProps } from 'react'
import { Text, TextTheme } from '../Text/Text'
import { Loader, LoaderTheme } from '../Loader/Loader'

export enum InputTheme {
  MAIN = 'main'
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: FC<SVGProps<SVGSVGElement>>
  theme?: InputTheme
  error?: string
  isLoading?: boolean
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    Icon,
    type = 'text',
    theme = InputTheme.MAIN,
    error,
    isLoading,
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
        {isLoading && (
          <Loader
            theme={LoaderTheme.ACCENT}
            className={cls.loader}
            size="50%"
          />
        )}
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
