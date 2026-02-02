import cls from './Textarea.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
  ChangeEvent,
  forwardRef,
  memo,
  TextareaHTMLAttributes,
  useLayoutEffect,
  useRef
} from 'react'
import { ValueOf } from '@/shared/types'
import { FieldTheme, Sizes } from '@/shared/consts/ui'
import { ErrorList } from '../ErrorList/ErrorList'
import { setRefs } from '@/shared/lib/refs/setRefs'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
  theme?: ValueOf<typeof FieldTheme>
  size?: ValueOf<typeof Sizes>
  error?: string
}

export const Textarea = memo(
  forwardRef<HTMLTextAreaElement, TextareaProps>(
    (props: TextareaProps, ref) => {
      const {
        className,
        size = Sizes.M,
        theme = FieldTheme.MAIN,
        error,
        readOnly,
        onChange,
        ...otherProps
      } = props

      const textareaRef = useRef<HTMLTextAreaElement>(null)

      const resize = () => {
        requestAnimationFrame(() => {
          const el = textareaRef.current
          if (!el) return

          el.style.height = 'auto'
          el.style.height = `${el.scrollHeight}px`
        })
      }

      const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        onChange?.(e)
        resize()
      }

      useLayoutEffect(() => {
        const el = textareaRef.current
        if (!el) return

        const observer = new ResizeObserver(resize)
        observer.observe(el)
        return () => observer.disconnect()
      }, [])

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
