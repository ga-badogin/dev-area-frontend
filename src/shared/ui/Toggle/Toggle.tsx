import cls from './Toggle.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ReactNode } from 'react'
import { typedMemo } from '@/shared/consts/memo'
import { Button, ButtonTheme } from '../Button/Button'

interface ToggleProps<T> {
  className?: string
  currentValue: T
  onToggle: (value: T) => void
  values: [{ content: ReactNode; value: T }, { content: ReactNode; value: T }]
}

export const Toggle = typedMemo(<T,>(props: ToggleProps<T>) => {
  const { className, values, onToggle, currentValue } = props

  return (
    <div className={classNames(cls.toggle, {}, [className])}>
      {values.map(
        ({ content, value }, index) =>
          currentValue !== value && (
            <Button
              theme={ButtonTheme.CLEAR}
              onClick={() => onToggle(value)}
              onMouseDown={(e) => e.preventDefault()}
              key={index}
            >
              {content}
            </Button>
          )
      )}
    </div>
  )
})
