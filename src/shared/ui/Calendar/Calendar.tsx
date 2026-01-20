import cls from './Calendar.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { forwardRef, memo, useState } from 'react'
import { Block } from '../Block/Block'
import { CalendarGrid } from './CalendarGrid/CalendarGrid'
import { CalendarControls } from './CalendarControls/CalendarControls'
import { useHandleCalendarSelect } from './useHandleCalendarSelect'

export type TCalendarView = 'years' | 'months' | 'days'
export type TCalendarMode = 'single' | 'range'
export type TSelectedDate = {
  firstDate: Date | null
  secondDate: Date | null
}

interface CalendarProps {
  className?: string
  initialView?: TCalendarView
  mode?: TCalendarMode
  isFutureDateDisabled?: boolean

  value?: TSelectedDate
  onSelect?: (value: TSelectedDate) => void
}

export const Calendar = memo(
  forwardRef<HTMLDivElement, CalendarProps>((props, ref) => {
    const {
      className,
      value,
      onSelect,
      mode = 'single',
      initialView = 'days',
      isFutureDateDisabled = false
    } = props

    const [view, setView] = useState(initialView)
    const [calendarDate, setCalendarDate] = useState(new Date())
    const [selectedDate, setSelectedDate] = useState<TSelectedDate>(
      value ?? {
        firstDate: null,
        secondDate: null
      }
    )

    const handleSelect = useHandleCalendarSelect({
      view,
      mode,
      setView,
      onSelect,
      initialView,
      setSelectedDate,
      selectedDate,
      setCalendarDate
    })

    return (
      <Block ref={ref} className={classNames(cls.calendar, {}, [className])}>
        <CalendarControls
          calendarDate={calendarDate}
          setCalendarDate={setCalendarDate}
          initialView={initialView}
          view={view}
          setView={setView}
        />
        <CalendarGrid
          view={view}
          calendarDate={calendarDate}
          selectedDate={selectedDate}
          onSelect={handleSelect}
          isFutureDateDisabled={isFutureDateDisabled}
        />
      </Block>
    )
  })
)
