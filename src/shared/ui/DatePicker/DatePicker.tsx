import cls from './DatePicker.module.scss'
import { memo, useCallback, useMemo, useRef, useState } from 'react'
import { Input } from '../Input/Input'
import { formatDay, formatMonth, formatYear } from '@/shared/lib/date/format'
import { classNames } from '@/shared/lib/classNames/classNames'
import { useClickOutside } from '@/shared/lib/hooks/useClickOutside/useClickOutside'
import { Calendar, CalendarProps } from '../Calendar/ui/Calendar/Calendar'
import { TSelectedDate } from '../Calendar/model/types/calendar'
import { Button, ButtonTheme } from '../Button/Button'
import { Sizes } from '@/shared/consts/ui'

interface DatePickerProps extends CalendarProps {
  className?: string
  readOnly?: boolean
}

export const DatePicker = memo((props: DatePickerProps) => {
  const {
    className,
    value,
    onSelect,
    initialView = 'days',
    readOnly = false,
    mode,
    isFutureDateDisabled
  } = props

  const datePickerRef = useRef<HTMLDivElement>(null)

  const [isActive, setIsActive] = useState(false)
  const [selectedDate, setSelectedDate] = useState<TSelectedDate>(
    value ?? {
      firstDate: null,
      secondDate: null
    }
  )

  useClickOutside(datePickerRef, () => setIsActive(false))

  const handleSelect = useCallback((value: TSelectedDate) => {
    onSelect?.(value)
    setSelectedDate(value)
  }, [])

  const inputLabel = useMemo(() => {
    const { firstDate, secondDate } = selectedDate

    if (!firstDate) return 'Выберите дату'

    const format = {
      days: formatDay,
      months: formatMonth,
      years: formatYear
    }[initialView]

    if (!secondDate) {
      return format(firstDate)
    }

    return `${format(firstDate)} / ${format(secondDate)}`
  }, [selectedDate, initialView])

  return (
    <div
      ref={datePickerRef}
      className={classNames(cls.datePicker, { [cls.readOnly]: readOnly }, [
        className,
        cls[initialView]
      ])}
    >
      <Button
        className={classNames(cls.button, { [cls.isFocus]: isActive })}
        size={Sizes.S}
        theme={ButtonTheme.OUTLINE}
        readOnly={readOnly}
        onClick={() => setIsActive(true)}
      >
        {inputLabel}
      </Button>
      <Calendar
        mode={mode}
        initialView={initialView}
        value={value}
        className={classNames(cls.calendar, { [cls.isActive]: isActive }, [])}
        onSelect={handleSelect}
        isFutureDateDisabled={isFutureDateDisabled}
      />
    </div>
  )
})
