import cls from './DatePicker.module.scss'
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Input } from '../Input/Input'
import CalendarIcon from '@/shared/assets/icons/Calendar.svg'
import { formatDay, formatMonth, formatYear } from '@/shared/lib/date/format'
import { Calendar, TCalendarMode, TCalendarView, TSelectedDate } from '../Calendar/Calendar'
import { classNames } from '@/shared/lib/classNames/classNames'

interface DatePickerProps {
  className?: string
  view?: TCalendarView
  mode?: TCalendarMode

  value?: TSelectedDate
  onSelect?: (value: TSelectedDate) => void
}

export const DatePicker = memo((props: DatePickerProps) => {
  const { className, value, onSelect, view = 'days', mode } = props

  const inputRef = useRef<HTMLInputElement>(null)
  const calendarRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)

  const [selectedDate, setSelectedDate] = useState<TSelectedDate>(
    value ?? {
      firstDate: null,
      secondDate: null
    }
  )

  const inputLabel = useMemo(() => {
    const { firstDate, secondDate } = selectedDate

    if (!firstDate) return 'Выберите дату'

    const format = {
      days: formatDay,
      months: formatMonth,
      years: formatYear
    }[view]

    if (!secondDate) {
      return format(firstDate)
    }

    return `${format(firstDate)} — ${format(secondDate)}`
  }, [selectedDate, view])

  const handleSelect = useCallback((value: TSelectedDate) => {
    onSelect?.(value)
    setSelectedDate(value)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target instanceof Node)) return
      console.log(inputRef.current, e.target)
      console.log(calendarRef.current, e.target)
      if (
        inputRef.current &&
        !inputRef.current.contains(e.target) &&
        calendarRef.current &&
        !calendarRef.current.contains(e.target)
      ) {
        setIsActive(false)
      }
    }

    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div className={cls.datePicker}>
      <Input
        ref={inputRef}
        onClick={() => setIsActive(true)}
        Icon={CalendarIcon}
        value={inputLabel}
      />
      <Calendar
        ref={calendarRef}
        mode={mode}
        initialView={view}
        value={value}
        className={classNames(cls.calendar, { [cls.isActive]: isActive }, [])}
        onSelect={handleSelect}
      />
    </div>
  )
})
