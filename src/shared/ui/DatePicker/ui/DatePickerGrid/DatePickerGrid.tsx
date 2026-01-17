import cls from './DatePickerGrid.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Button, ButtonTheme } from '../../../Button/Button'
import { useDateGrid } from '@/shared/lib/hooks/useDateGrid/useDateGrid'
import { TDatePickerView } from '../../model/types/datePicker'

interface DatePickerGridProps {
  className?: string
  currentDate: Date
  view: TDatePickerView
}

export const DatePickerGrid = memo((props: DatePickerGridProps) => {
  const { className, currentDate, view } = props

  const dateGridItems = useDateGrid(currentDate, view)

  return (
    <div className={classNames(cls.datePickerGrid, {}, [cls[view]])}>
      {dateGridItems.map(({ label, date, isSelected, isToday }) => (
        <Button
          key={date.getTime()}
          theme={ButtonTheme.OUTLINE}
          className={classNames(cls.button, {
            [cls.selected]: isSelected,
            [cls.today]: isToday
          })}
        >
          {label}
        </Button>
      ))}
    </div>
  )
})
