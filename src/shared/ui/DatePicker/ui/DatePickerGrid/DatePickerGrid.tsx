import cls from './DatePickerGrid.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Button, ButtonTheme } from '../../../Button/Button'
import { useDateGrid } from '@/shared/lib/hooks/useDateGrid/useDateGrid'
import { TDatePickerView } from '../../model/types/datePicker'
import { TDate } from '../DatePicker/DatePicker'

interface DatePickerGridProps {
  className?: string
  currentDate: Date
  selectedDate: TDate
  view: TDatePickerView
  onSelect?: (date: Date) => void
}

export const DatePickerGrid = memo((props: DatePickerGridProps) => {
  const { currentDate, view, onSelect, selectedDate } = props

  const dateGridItems = useDateGrid(selectedDate, currentDate, view)

  return (
    <div className={classNames(cls.datePickerGrid, {}, [cls[view]])}>
      {dateGridItems.map(({ label, date, isSelected, isToday, isDisabled }) => (
        <Button
          key={date.getTime()}
          disabled={isDisabled}
          theme={ButtonTheme.OUTLINE}
          onClick={() => onSelect?.(date)}
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
