import cls from './Textarea.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ValueOf } from '@/shared/types'
import { Sizes } from '@/shared/consts/ui'
import { ErrorList } from '../ErrorList/ErrorList'
import { setRefs } from '@/shared/lib/refs/setRefs'
import {
  ChangeEvent,
  forwardRef,
  memo,
  TextareaHTMLAttributes,
  useRef
} from 'react'
import { useDynamicTextarea } from '@/shared/lib/hooks/useDynamicTextarea/useDynamicTextarea '

export const TextareaTheme = {
  MAIN: 'main'
} as const

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
  theme?: ValueOf<typeof TextareaTheme>
  size?: ValueOf<typeof Sizes>
  error?: string
}

export const Textarea = memo(
  forwardRef<HTMLTextAreaElement, TextareaProps>(
    (props: TextareaProps, ref) => {
      const {
        className,
        size = Sizes.M,
        theme = TextareaTheme.MAIN,
        error,
        readOnly,
        onChange,
        ...otherProps
      } = props

      const textareaRef = useRef<HTMLTextAreaElement>(null)
      const resizeHeight = useDynamicTextarea(textareaRef)

      const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e)
        resizeHeight()
      }

      return (
        <div className={classNames(cls.wrapper, {}, [className])}>
          <textarea
            rows={1}
            ref={setRefs(ref, textareaRef)}
            className={classNames(cls.textarea, {}, [cls[theme], cls[size]])}
            onChange={handleChange}
            readOnly={readOnly}
            {...otherProps}
          />
          <ErrorList error={error} />
        </div>
      )
    }
  )
)
