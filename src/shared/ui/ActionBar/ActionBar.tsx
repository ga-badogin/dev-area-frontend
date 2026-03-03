import cls from './ActionBar.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, ReactNode } from 'react'
import { Block } from '../Block/Block'

interface ActionBarProps {
  className?: string
  children: ReactNode
}

export const ActionBar = memo((props: ActionBarProps) => {
  const { className, children } = props

  return (
    <Block
      className={classNames(cls.actionBar, {}, [className])}
      wrapperClassName={cls.wrapper}
    >
      {children}
    </Block>
  )
})
