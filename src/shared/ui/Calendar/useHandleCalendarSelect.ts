import { Dispatch, SetStateAction, useCallback } from 'react'
import { TCalendarMode, TCalendarView, TSelectedDate } from './Calendar'

interface UseHandleCalendarSelectParams {
  view: TCalendarView
  mode: TCalendarMode
  initialView: TCalendarView
  setView: Dispatch<SetStateAction<TCalendarView>>
  selectedDate: TSelectedDate
  setCalendarDate: Dispatch<SetStateAction<Date>>
  setSelectedDate: Dispatch<SetStateAction<TSelectedDate>>
  onSelect?: (value: TSelectedDate) => void
}

export const useHandleCalendarSelect = (
  params: UseHandleCalendarSelectParams
) => {
  const {
    setCalendarDate,
    setSelectedDate,
    onSelect,
    view,
    mode,
    setView,
    initialView,
    selectedDate
  } = params

  const updateDate = useCallback(
    (date: TSelectedDate) => {
      setSelectedDate(date)
      onSelect?.(date)
    },
    [onSelect]
  )

  return useCallback(
    (date: Date) => {
      setCalendarDate(date)
      updateDate(
        ((prev) => {
          const { firstDate, secondDate } = prev

          if (!firstDate) {
            return { firstDate: date, secondDate: null }
          }

          if (!secondDate && mode === 'range') {
            return firstDate <= date
              ? { firstDate, secondDate: date }
              : { firstDate: date, secondDate: firstDate }
          }

          return { firstDate: date, secondDate: null }
        })(selectedDate)
      )
      setView((prev) => {
        console.log(prev, view)
        if (prev === initialView) return prev
        if (prev === 'years') return 'months'
        if (prev === 'months') return 'days'
        return prev
      })
    },
    [view, initialView, selectedDate, updateDate]
  )
}
