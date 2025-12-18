import cls from './Input.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
  FC,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  memo,
  SVGProps,
  useCallback,
  useRef,
  useState
} from 'react'
import { Text, TextTheme } from '../Text/Text'
import { Loader, LoaderTheme } from '../Loader/Loader'
import { RefCallBack } from 'react-hook-form'
import { Toggle } from '../Toggle/Toggle'
import ClosedEye from '@/shared/assets/icons/ClosedEye.svg'
import OpenedEye from '@/shared/assets/icons/OpenedEye.svg'
import { ValueOf } from '@/shared/types'
import { Sizes } from '@/shared/consts/ui'

export const InputTheme = {
  MAIN: 'main'
} as const

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: FC<SVGProps<SVGSVGElement>>
  theme?: ValueOf<typeof InputTheme>
  error?: string
  isLoading?: boolean
  ref?: RefCallBack
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    Icon,
    type = 'text',
    theme = InputTheme.MAIN,
    error,
    isLoading,
    ref,
    ...otherProps
  } = props

  const inputRef = useRef<HTMLInputElement>(null)

  const [passwordType, setPasswordType] =
    useState<HTMLInputTypeAttribute>('password')

  const handleToggle = useCallback(
    (value: HTMLInputTypeAttribute) => {
      setPasswordType(value)

      requestAnimationFrame(() => {
        const input = inputRef.current
        if (!input) return

        const length = input.value.length
        input.setSelectionRange(length, length)
      })
    },
    [inputRef]
  )

  return (
    <div className={className}>
      <div className={cls.inputWrapper}>
        <input
          className={classNames(cls.input, { [cls.error]: error }, [
            cls[theme]
          ])}
          type={type === 'password' ? passwordType : type}
          autoComplete="off"
          ref={(el) => {
            ref?.(el)
            inputRef.current = el
          }}
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
        {type === 'password' && (
          <Toggle
            className={cls.toggle}
            currentValue={passwordType}
            onToggle={handleToggle}
            values={[
              {
                content: <ClosedEye className={cls.passwordIcon} />,
                value: 'text'
              },
              {
                content: <OpenedEye className={cls.passwordIcon} />,
                value: 'password'
              }
            ]}
          />
        )}
      </div>

      {error && (
        <ul className={cls.errorList}>
          {error.split('/').map((error, index) => (
            <li className={cls.listItem} key={index}>
              <Text theme={TextTheme.ERROR} paragraph={error} size={Sizes.S} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
})
