import { Dispatch, SetStateAction, useCallback, useMemo } from 'react'
import { TCalendarView } from '../../model/types/calendar'

import {
  formatMonth,
  formatYear,
  formatYearRange
} from '@/shared/lib/date/format'
import { getNextView } from '@/shared/ui/Calendar/model/utils/getNextView'

interface UseCalendarControlsParams {
  calendarDate: Date
  setCalendarDate: Dispatch<SetStateAction<Date>>
  initialView: TCalendarView
  view: TCalendarView
  setView: Dispatch<SetStateAction<TCalendarView>>
}

export const useCalendarControls = (params: UseCalendarControlsParams) => {
  const { view, initialView, setView, calendarDate, setCalendarDate } = params

  const handleView = useCallback(() => {
    setView(getNextView(initialView, 'prev'))
  }, [initialView])

  const headerLabel = useMemo(() => {
    return {
      days: formatMonth(calendarDate),
      months: formatYear(calendarDate),
      years: formatYearRange(calendarDate)
    }[view]
  }, [view, calendarDate])

  const handleFlip = useCallback(
    (direction: 'prev' | 'next') => {
      setCalendarDate((prev) => {
        const year = prev.getFullYear()
        const month = prev.getMonth()
        const step = direction === 'prev' ? -1 : 1

        return {
          days: new Date(year, month + step, 1),
          months: new Date(year + step, month, 1),
          years: new Date(year + step * 9, month, 1)
        }[view]
      })
    },
    [view]
  )

  return {
    handleView,
    handleFlip,
    headerLabel
  }
}
