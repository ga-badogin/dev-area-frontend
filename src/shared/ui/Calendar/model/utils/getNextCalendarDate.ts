import { TCalendarMode, TCalendarView, TSelectedDate } from '../types/calendar'

export const getNextCalendarDate = (
  date: Date,
  mode: TCalendarMode,
  prev: TSelectedDate,
  view: TCalendarView,
  initialView: TCalendarView
) => {
  const { firstDate, secondDate } = prev

  if (!firstDate) {
    return { firstDate: date, secondDate: null }
  }

  if (!secondDate && mode === 'range' && view === initialView) {
    return firstDate <= date
      ? { firstDate, secondDate: date }
      : { firstDate: date, secondDate: firstDate }
  }

  return { firstDate: date, secondDate: null }
}
