import cls from './Input.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Loader, LoaderTheme } from '../Loader/Loader'
import { RefCallBack } from 'react-hook-form'
import { Toggle } from '../Toggle/Toggle'
import ClosedEye from '@/shared/assets/icons/ClosedEye.svg'
import OpenedEye from '@/shared/assets/icons/OpenedEye.svg'
import { ValueOf } from '@/shared/types'
import { ErrorList } from '../ErrorList/ErrorList'
import { useFocus } from '@/shared/lib/hooks/useFocus/useFocus'
import { FieldTheme, Sizes } from '@/shared/consts/ui'
import {
  FC,
  ForwardedRef,
  forwardRef,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  memo,
  SVGProps,
  useCallback,
  useRef,
  useState
} from 'react'

const setRefs =
  <T,>(...refs: Array<ForwardedRef<T>>) =>
  (node: T | null) => {
    refs.forEach((ref) => {
      if (!ref) return

      if (typeof ref === 'function') {
        ref(node)
      } else {
        ref.current = node
      }
    })
  }

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  Icon?: FC<SVGProps<SVGSVGElement>>
  theme?: ValueOf<typeof FieldTheme>
  size?: ValueOf<typeof Sizes>
  error?: string
  isLoading?: boolean
  ref?: RefCallBack
}

export const Input = memo(
  forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    const {
      className,
      Icon,
      type = 'text',
      theme = FieldTheme.MAIN,
      size = Sizes.S,
      error,
      isLoading,
      ...otherProps
    } = props

    const inputRef = useRef<HTMLInputElement>(null)

    const [passwordType, setPasswordType] =
      useState<HTMLInputTypeAttribute>('password')

    const { isFocused, handlers } = useFocus()

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
              cls[theme],
              cls[size]
            ])}
            ref={setRefs(ref, inputRef)}
            type={type === 'password' ? passwordType : type}
            autoComplete="off"
            {...otherProps}
            {...handlers}
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

        <ErrorList isActive={isFocused} error={error} />
      </div>
    )
  })
)
