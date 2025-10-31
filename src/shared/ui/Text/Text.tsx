import cls from './Text.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'

interface TextProps {
  className?: string
  title?: string
  paragraph?: string
}

export const Text = memo((props: TextProps) => {
  const { className, title, paragraph } = props

  return (
    <div className={classNames(cls.text, {}, [className])}>
      <h1 className={cls.title}>{title}</h1>
      <p className={cls.paragraph}>{paragraph}</p>
    </div>
  )
})
