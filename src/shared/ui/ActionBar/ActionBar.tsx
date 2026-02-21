import cls from './ActionBar.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Children, memo, ReactNode } from 'react'
import { Block } from '../Block/Block'

interface ActionBarProps {
  className?: string
  children: ReactNode
}

export const ActionBar = memo((props: ActionBarProps) => {
  const { className, children } = props

  const items = Children.toArray(children)

  return (
    <Block className={classNames(cls.actionBar, {}, [className])}>
      {items.map((child, index) => (
        <>
          {child}
          {index < items.length - 1 && <div className={cls.separator} />}
        </>
      ))}
    </Block>
  )
})
