import cls from './DatePicker.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useCallback, useMemo, useState } from 'react'
import { Block } from '../../../Block/Block'
import { TDatePickerView } from '../../model/types/datePicker'
import { DatePickerGrid } from '../DatePickerGrid/DatePickerGrid'
import { DatePickerCaption } from '../DatePickerCaption/DatePickerCaption'
import { Input } from '../../../Input/Input'

interface DatePickerProps {
  className?: string
  view?: TDatePickerView

  value?: TDate
  onChange?: (value: TDate) => void
}

export type TDate = {
  firstDate: Date | null
  secondDate: Date | null
}

export const DatePicker = memo((props: DatePickerProps) => {
  const { className, view = 'days', value, onChange } = props

  const [selectedView, setSelectedView] = useState(view)
  const [currentDate, setCurrentDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState<TDate>(
    value ?? {
      firstDate: null,
      secondDate: null
    }
  )

  const updateDate = useCallback(
    (date: TDate) => {
      setSelectedDate(date)
      onChange?.(date)
    },
    [onChange]
  )

  const handleSelect = useCallback(
    (date: Date) => {
      setCurrentDate(date)
      updateDate(
        ((prev) => {
          const { firstDate, secondDate } = prev

          if (!firstDate) {
            return { firstDate: date, secondDate: null }
          }

          if (!secondDate) {
            if (selectedView !== 'years') {
              return firstDate <= date
                ? { firstDate, secondDate: date }
                : { firstDate: date, secondDate: firstDate }
            }
            return prev
          }

          return { firstDate: date, secondDate: null }
        })(selectedDate)
      )
      setSelectedView((prev) => {
        if (prev === view) return prev
        if (prev === 'years') return 'months'
        if (prev === 'months') return 'days'
        return prev
      })
    },
    [selectedView, selectedDate, updateDate]
  )

  const inputLabel = useMemo(() => {
    const { firstDate, secondDate } = selectedDate

    return `${firstDate?.toLocaleDateString('ru-RU', { month: 'long' })} ${firstDate?.getFullYear()} - ${secondDate?.toLocaleDateString('ru-RU', { month: 'long' })} ${secondDate?.getFullYear()}`
  }, [selectedDate])

  return (
    <div>
      <Input value={inputLabel} readOnly />
      <Block
        className={classNames(cls.datePicker, {}, [className])}
        padding="12px"
      >
        <DatePickerCaption
          view={view}
          setCurrentDate={setCurrentDate}
          selectedView={selectedView}
          currentDate={currentDate}
          setSelectedView={setSelectedView}
        />
        <DatePickerGrid
          onSelect={handleSelect}
          selectedDate={selectedDate}
          currentDate={currentDate}
          view={selectedView}
        />
      </Block>
    </div>
  )
})
