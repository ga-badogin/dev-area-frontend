import cls from './Paragraph.module.scss'

import { HTMLAttributes, memo } from 'react'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ValueOf } from '@/shared/types'
import { Sizes } from '@/shared/consts/ui'

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {
  className?: string
  size?: ValueOf<typeof Sizes>
}

export const Paragraph = memo((props: ParagraphProps) => {
  const { className, size = Sizes.M, ...otherProps } = props

  return (
    <p
      className={classNames(cls.paragraph, {}, [className, cls[size]])}
      {...otherProps}
    />
  )
})
