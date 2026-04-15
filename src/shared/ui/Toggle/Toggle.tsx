import { classNames } from '@/shared/lib/classNames/classNames'
import { ReactNode } from 'react'
import { typedMemo } from '@/shared/consts/memo'
import { Button, ButtonTheme } from '../Button/Button'

export type TToggleConfig<T> = [
  { content: ReactNode; value: T },
  { content: ReactNode; value: T }
]

interface ToggleProps<T> {
  id?: string
  className?: string
  currentValue: T
  onToggle: (value: T) => void
  values: TToggleConfig<T>
}

export const Toggle = typedMemo(<T,>(props: ToggleProps<T>) => {
  const { className, values, onToggle, currentValue, id } = props

  return values.map(
    ({ content, value }, index) =>
      currentValue !== value && (
        <Button
          id={id}
          className={className}
          theme={ButtonTheme.CLEAR}
          onClick={() => onToggle(value)}
          onMouseDown={(e) => e.preventDefault()}
          key={index}
        >
          {content}
        </Button>
      )
  )
})
