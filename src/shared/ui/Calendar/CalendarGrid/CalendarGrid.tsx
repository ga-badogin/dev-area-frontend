import cls from './CalendarGrid.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Button, ButtonTheme } from '../../Button/Button'
import { useCalendarGrid } from './useCalendarGrid'
import { TCalendarView, TSelectedDate } from '../Calendar'

interface CalendarGridProps {
  className?: string
  view: TCalendarView
  calendarDate: Date
  selectedDate: TSelectedDate
  onSelect?: (date: Date) => void
  isFutureDateDisabled: boolean
}

export const CalendarGrid = memo((props: CalendarGridProps) => {
  const { className, onSelect, ...otherProps } = props

  const dateGridItems = useCalendarGrid(otherProps)

  return (
    <div
      className={classNames(cls.calendarGrid, {}, [
        className,
        cls[otherProps.view]
      ])}
    >
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
