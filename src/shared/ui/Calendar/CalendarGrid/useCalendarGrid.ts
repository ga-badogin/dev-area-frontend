import { useMemo } from 'react'
import { TCalendarView, TSelectedDate } from '../Calendar'
import {
  isSameDay,
  isSameMonth,
  isSameYear,
  TSameFunc
} from '../../../lib/date/compare'
import {
  isFutureDay,
  isFutureMonth,
  isFutureYear,
  TFutureFunc
} from '../../../lib/date/future'
import { capitalize } from '@/shared/lib/date/format'

interface IDateItem {
  date: Date
  label: string | number
  isSelected: boolean
  isToday: boolean
  isDisabled: boolean
}

interface UseCalendarGridParams {
  selectedDate: TSelectedDate
  calendarDate: Date
  view: TCalendarView
  isFutureDateDisabled: boolean
}

export const useCalendarGrid = (params: UseCalendarGridParams): IDateItem[] => {
  const { view, calendarDate, selectedDate, isFutureDateDisabled } = params
  const { firstDate, secondDate } = selectedDate

  const year = calendarDate.getFullYear()
  const month = calendarDate.getMonth()
  const today = new Date()

  return useMemo(() => {
    const makeItem = (
      date: Date,
      label: string | number,
      isSame: TSameFunc,
      isFuture: TFutureFunc
    ): IDateItem => {
      const isDisabled = isFutureDateDisabled ? isFuture(date, today) : false

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
            capitalize(d.toLocaleString('ru-RU', { month: 'long' })),
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
