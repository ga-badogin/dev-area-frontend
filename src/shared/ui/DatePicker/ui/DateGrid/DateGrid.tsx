import cls from './DateGrid.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Button, ButtonTheme } from '../../../Button/Button'
import { useDate } from '@/shared/lib/hooks/useDate/useDate'
import { TDateView } from '@/shared/types/date'

interface DateGridProps {
  className?: string
  currentDate: Date
  view: TDateView
  onSelect: (d: Date) => void
}

export const DateGrid = memo((props: DateGridProps) => {
  const { className, currentDate, view, onSelect } = props

  const dates = useDate(currentDate, view)

  return (
    <div className={classNames(cls.dateGrid, {}, [className, cls[view]])}>
      {dates.map(({ date, label, isToday, isSelected }) => (
        <Button
          key={date.getTime()}
          theme={ButtonTheme.OUTLINE}
          className={classNames(cls.button, {
            [cls.today]: isToday,
            [cls.current]: isSelected
          })}
          onClick={() => onSelect(date)}
        >
          {label}
        </Button>
      ))}
    </div>
  )
})
