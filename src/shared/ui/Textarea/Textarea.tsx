import cls from './Textarea.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, TextareaHTMLAttributes, useLayoutEffect, useRef } from 'react'
import { ValueOf } from '@/shared/types'
import { FieldTheme, Sizes } from '@/shared/consts/ui'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string
  theme?: ValueOf<typeof FieldTheme>
  size?: ValueOf<typeof Sizes>
}

export const Textarea = memo((props: TextareaProps) => {
  const {
    className,
    size = Sizes.M,
    theme = FieldTheme.MAIN,
    ...otherProps
  } = props

  const ref = useRef<HTMLTextAreaElement>(null)

  const resize = () => {
    if (!ref.current) return
    const scrollHeight = ref.current.scrollHeight
    if (ref.current.offsetHeight !== scrollHeight) {
      requestAnimationFrame(() => {
        ref.current!.style.height = `${scrollHeight}px`
      })
    }
  }

  useLayoutEffect(() => {
    if (!ref.current) return
    const observer = new ResizeObserver(resize)
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <textarea
      ref={ref}
      className={classNames(cls.textarea, {}, [
        className,
        cls[theme],
        cls[size]
      ])}
      {...otherProps}
    />
  )
})
