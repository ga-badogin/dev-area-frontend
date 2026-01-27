import cls from './Textarea.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import {
  forwardRef,
  memo,
  TextareaHTMLAttributes,
  useLayoutEffect,
  useRef,
  useState
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
        ...otherProps
      } = props

      const textareaRef = useRef<HTMLTextAreaElement>(null)
      const [height, setHeight] = useState<number>(0)

      useLayoutEffect(() => {
        if (!textareaRef.current) return
        const el = textareaRef.current

        const resize = () => {
          setHeight((prev) => {
            const scrollHeight = el.scrollHeight
            if (scrollHeight !== prev) {
              console.log(height, scrollHeight)
              return scrollHeight
            }

            return prev
          })
        }

        const observer = new ResizeObserver(resize)
        observer.observe(el)
        return () => observer.disconnect()
      }, [readOnly])

      return (
        <div className={classNames(cls.wrapper, {}, [className])}>
          <textarea
            ref={setRefs(ref, textareaRef)}
            onInput={() => console.log('input')}
            className={classNames(cls.textarea, {}, [cls[theme], cls[size]])}
            style={{ height: height }}
            readOnly={readOnly}
            {...otherProps}
          />
          <ErrorList error={error} />
        </div>
      )
    }
  )
)
