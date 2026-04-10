import cls from './StoryList.module.scss'
import { ComponentType } from 'react'
import { Paragraph } from '@/shared/ui/Paragraph/Paragraph'
import { Sizes } from '@/shared/consts/ui'

interface StoryListProps<T> {
  states: Partial<T>[]
  baseProps: T
  Component: ComponentType<T>
}

export const StoryList = <T,>(props: StoryListProps<T>) => {
  const { states, baseProps, Component } = props

  return (
    <div className={cls.storyList}>
      {states.map((state, index) => (
        <div className={cls.storyListItem} key={index}>
          <Paragraph size={Sizes.L} className={cls.paragraph}>
            {Object.keys(state).join(' / ') || 'base props'}
          </Paragraph>
          <Component {...baseProps} {...state} />
        </div>
      ))}
    </div>
  )
}
