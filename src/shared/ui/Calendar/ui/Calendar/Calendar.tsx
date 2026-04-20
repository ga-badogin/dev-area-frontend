import cls from './Calendar.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useCallback, useState } from 'react'
import { Block } from '../../../Block/Block'
import { CalendarGrid } from '../CalendarGrid/CalendarGrid'
import { CalendarControls } from '../CalendarControls/CalendarControls'
import { getNextCalendarDate } from '../../model/utils/getNextCalendarDate'
import { getNextView } from '../../model/utils/getNextView'
import {
  TCalendarMode,
  TCalendarView,
  TSelectedDate
} from '../../model/types/calendar'

export interface CalendarProps {
  id?: string
  className?: string
  initialView?: TCalendarView
  mode?: TCalendarMode
  isFutureDateDisabled?: boolean

  value?: TSelectedDate
  onSelect?: (value: TSelectedDate) => void
}

export const Calendar = memo((props: CalendarProps) => {
  const {
    id,
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

  const handleSelect = useCallback(
    (date: Date) => {
      setCalendarDate(date)

      const nextDate = getNextCalendarDate(date, mode, selectedDate)
      setSelectedDate(nextDate)
      onSelect?.(nextDate)

      setView(getNextView(initialView, 'next'))
    },
    [initialView, selectedDate, mode]
  )

  return (
    <Block id={id} className={classNames(cls.calendar, {}, [className])}>
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
