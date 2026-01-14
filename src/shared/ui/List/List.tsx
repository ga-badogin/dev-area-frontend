import { typedMemo } from '@/shared/consts/memo'
import { ComponentType } from 'react'

interface ListProps<T> {
  className?: string
  items: T[]
  Element: ComponentType<{ item: T }>
}

export const List = typedMemo(<T,>(props: ListProps<T>) => {
  const { className, items, Element } = props

  return (
    <>
      {items.map((item, index) => (
        <Element item={item} key={index} />
      ))}
    </>
  )
})
