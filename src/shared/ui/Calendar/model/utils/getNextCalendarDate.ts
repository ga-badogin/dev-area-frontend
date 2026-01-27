import { TCalendarMode, TSelectedDate } from '../types/calendar'

export const getNextCalendarDate = (
  date: Date,
  mode: TCalendarMode,
  prev: TSelectedDate
) => {
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
}
