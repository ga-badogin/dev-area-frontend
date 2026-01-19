import { useMemo } from 'react'
import { TDatePickerView } from '@/shared/ui/DatePicker/model/types/datePicker'
import {
  isSameDay,
  isSameMonth,
  isSameYear,
  TSameFunc
} from '../../date/compare'
import {
  isFutureDay,
  isFutureMonth,
  isFutureYear,
  TFutureFunc
} from '../../date/future'
import { TDate } from '@/shared/ui/DatePicker/ui/DatePicker/DatePicker'

interface IDateItem {
  date: Date
  label: string | number
  isSelected: boolean
  isToday: boolean
  isDisabled: boolean
}

export const useDateGrid = (
  selectedDate: TDate,
  currentDate: Date,
  view: TDatePickerView
): IDateItem[] => {
  const { firstDate, secondDate } = selectedDate

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const today = new Date()

  return useMemo(() => {
    const makeItem = (
      date: Date,
      label: string | number,
      isSame: TSameFunc,
      isFuture: TFutureFunc
    ): IDateItem => {
      const isDisabled = false
      // isFuture(date, today)

      return {
        date,
        label,
        isSelected: !isDisabled && isSame(date, firstDate, secondDate),
        isToday: isSame(date, today, null),
        isDisabled
      }
    }

    switch (view) {
      case 'days':
        const daysInMonth = new Date(year, month + 1, 0).getDate()

        return Array.from({ length: daysInMonth }, (_, i) => {
          const d = new Date(year, month, i + 1)
          return makeItem(d, d.getDate(), isSameDay, isFutureDay)
        })

      case 'months':
        return Array.from({ length: 12 }, (_, i) => {
          const d = new Date(year, i, 1)
          return makeItem(
            d,
            d.toLocaleString('ru-RU', { month: 'long' }),
            isSameMonth,
            isFutureMonth
          )
        })

      case 'years':
        return Array.from({ length: 9 }, (_, i) => {
          const d = new Date(year - 4 + i, month, 1)
          return makeItem(d, d.getFullYear(), isSameYear, isFutureYear)
        })
    }
  }, [firstDate, year, month, view, today])
}
