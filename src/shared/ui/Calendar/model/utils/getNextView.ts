import { TCalendarView } from '../types/calendar'

export const getNextView =
  (initialView: TCalendarView, direction: 'next' | 'prev') =>
  (prev: TCalendarView) => {
    if (direction === 'prev') {
      if (prev === 'days') return 'months'
      if (prev === 'months') return 'years'
      return initialView
    } else {
      if (prev === initialView) return prev
      if (prev === 'years') return 'months'
      if (prev === 'months') return 'days'
      return prev
    }
  }
