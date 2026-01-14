import cls from './Title.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { HTMLAttributes, memo } from 'react'
import { ValueOf } from '@/shared/types'
import { Sizes } from '@/shared/consts/ui'

type TitleTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
  className?: string
  as: TitleTag
  size?: ValueOf<typeof Sizes>
}

export const Title = memo((props: TitleProps) => {
  const { className, as, size = Sizes.XXL, children, ...otherProps } = props

  const Tag = as

  return children ? (
    <Tag
      className={classNames(cls.title, {}, [className, cls[size]])}
      {...otherProps}
    >
      {children}
    </Tag>
  ) : undefined
})
