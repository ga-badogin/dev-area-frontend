import cls from './Input.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Loader, LoaderTheme } from '../../Loader/Loader'
import { FieldError, RefCallBack } from 'react-hook-form'
import { ValueOf } from '@/shared/types'
import { ErrorList } from '../../ErrorList/ErrorList'
import { useFocus } from '@/shared/lib/hooks/useFocus/useFocus'
import { Sizes } from '@/shared/consts/ui'
import { setRefs } from '@/shared/lib/refs/setRefs'
import { useDynamicInput } from '@/shared/lib/hooks/useDynamicInput/useDynamicInput'
import { Toggle } from '../../Toggle/Toggle'
import { inputToggleConfig } from '../lib/inputToggleConfig'
import { FieldTheme } from '@/shared/types/style'
import {
  ChangeEvent,
  FC,
  forwardRef,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  memo,
  SVGProps,
  useCallback,
  useRef,
  useState
} from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  Icon?: FC<SVGProps<SVGSVGElement>>
  theme?: ValueOf<typeof FieldTheme>
  fontSize?: ValueOf<typeof Sizes>
  error?: FieldError
  isLoading?: boolean
  ref?: RefCallBack
  isDynamic?: boolean
  isError?: boolean
}

export const Input = memo(
  forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {
      className,
      Icon,
      type = 'text',
      theme = FieldTheme.MAIN,
      fontSize = Sizes.M,
      error,
      isLoading,
      isDynamic = false,
      isError = false,
      onChange,
      ...otherProps
    } = props

    const inputRef = useRef<HTMLInputElement>(null)

    const [passwordType, setPasswordType] =
      useState<HTMLInputTypeAttribute>('password')

    const { isFocused, handlers } = useFocus()
    const resize = useDynamicInput(inputRef, isDynamic)

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e)
      resize()
    }

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
        <div className={classNames(cls.inputWrapper, {}, [cls[fontSize]])}>
          <input
            className={classNames(
              cls.input,
              { [cls.error]: Boolean(error) || isError },
              [cls[theme], cls[fontSize]]
            )}
            ref={setRefs(ref, inputRef)}
            type={type === 'password' ? passwordType : type}
            autoComplete="off"
            onChange={handleChange}
            {...otherProps}
            {...handlers}
          />
          {Icon && <Icon className={cls.icon} />}
          {isLoading && (
            <Loader theme={LoaderTheme.ACCENT} id={cls.loader} size="1lh" />
          )}
          {type === 'password' && (
            <Toggle
              id={cls.toggle}
              currentValue={passwordType}
              onToggle={handleToggle}
              values={inputToggleConfig}
            />
          )}
        </div>

        <ErrorList isActive={isFocused} error={error} />
      </div>
    )
  })
)
