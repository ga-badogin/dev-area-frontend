import cls from './Text.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'

export enum TextTheme {
  MAIN = 'main',
  ERROR = 'error'
}

interface TextProps {
  className?: string
  title?: string
  paragraph?: string
  theme?: TextTheme
}

export const Text = memo((props: TextProps) => {
  const { className, title, paragraph, theme = TextTheme.MAIN } = props

  return (
    <div className={classNames(cls.text, {}, [className, cls[theme]])}>
      <h1 className={cls.title}>{title}</h1>
      <p className={cls.paragraph}>{paragraph}</p>
    </div>
  )
})
