import cls from './Block.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ReactNode } from 'react'
import { ValueOf } from '@/shared/types'
import { Title } from '../Title/Title'
import { Sizes } from '@/shared/consts/ui'

export const BlockTheme = {
  MAIN: 'main',
  CLEAR: 'clear',
  SMALL: 'small'
} as const

interface BlockWrapperProps {
  className?: string
  children: ReactNode
  title?: string
  theme?: ValueOf<typeof BlockTheme>
}

export const Block = (props: BlockWrapperProps) => {
  const { className, children, title, theme = BlockTheme.MAIN } = props

  return (
    <div className={classNames(cls.block, {}, [className, cls[theme]])}>
      <Title size={Sizes.XL} className={cls.title} as="h1">
        {title}
      </Title>
      {children}
    </div>
  )
}
