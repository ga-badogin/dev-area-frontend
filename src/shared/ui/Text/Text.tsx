import cls from './Text.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { ValueOf } from '@/shared/types'
import { Sizes } from '@/shared/consts/ui'

export const TextTheme = {
  MAIN: 'main',
  ERROR: 'error'
} as const

interface TextProps {
  className?: string
  title?: string
  paragraph?: string
  theme?: ValueOf<typeof TextTheme>
  size?: ValueOf<typeof Sizes>
}

export const Text = memo((props: TextProps) => {
  const {
    className,
    title,
    paragraph,
    theme = TextTheme.MAIN,
    size = Sizes.M
  } = props

  return (
    <div
      className={classNames(cls.text, {}, [className, cls[theme], cls[size]])}
    >
      <h1 className={cls.title}>{title}</h1>
      <p className={cls.paragraph}>{paragraph}</p>
    </div>
  )
})
