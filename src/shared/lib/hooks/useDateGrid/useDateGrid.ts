import { useMemo } from 'react'
import { TDatePickerView } from '@/shared/ui/DatePicker/model/types/datePicker'

interface IDateItem {
  date: Date
  label: string | number
  isSelected: boolean
  isToday: boolean
}

type TSameFunc = (a: Date, b: Date) => boolean

const isSameDay: TSameFunc = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate()

const isSameMonth: TSameFunc = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth()

const isSameYear: TSameFunc = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear()

export const useDateGrid = (
  currentDate: Date,
  view: TDatePickerView
): IDateItem[] => {
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const today = new Date()

  return useMemo(() => {
    const makeItem = (
      date: Date,
      label: string | number,
      isSame: TSameFunc
    ): IDateItem => ({
      date,
      label,
      isSelected: isSame(date, currentDate),
      isToday: isSame(date, today)
    })

    switch (view) {
      case 'days':
        const daysInMonth = new Date(year, month + 1, 0).getDate()

        return Array.from({ length: daysInMonth }, (_, i) => {
          const d = new Date(year, month, i + 1)
          return makeItem(d, d.getDate(), isSameDay)
        })

      case 'months':
        return Array.from({ length: 12 }, (_, i) => {
          const d = new Date(year, i, 1)
          return makeItem(
            d,
            d.toLocaleString('ru-RU', { month: 'long' }),
            isSameMonth
          )
        })

      case 'years':
        return Array.from({ length: 9 }, (_, i) => {
          const d = new Date(year - 4 + i, 0, 1)
          return makeItem(d, d.getFullYear(), isSameYear)
        })
    }
  }, [currentDate, year, month, view, today])
}
