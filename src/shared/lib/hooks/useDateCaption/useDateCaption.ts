import { Dispatch, SetStateAction, useCallback, useMemo } from 'react'
import { TDatePickerView } from '@/shared/ui/DatePicker/model/types/datePicker'

export const useDateCaption = (
  view: TDatePickerView,
  selectedView: TDatePickerView,
  setSelectedView: Dispatch<SetStateAction<TDatePickerView>>,
  currentDate: Date,
  setCurrentDate: Dispatch<SetStateAction<Date>>
) => {
  const handleView = useCallback(() => {
    setSelectedView((prev) => {
      if (prev === 'days') return 'months'
      if (prev === 'months') return 'years'
      return view
    })
  }, [view])

  const headerLabel = useMemo(() => {
    switch (selectedView) {
      case 'days':
        return `${currentDate.toLocaleDateString('ru-RU', { month: 'long' })} ${currentDate.getFullYear()}`
      case 'months':
        return currentDate.getFullYear()
      case 'years':
        return `${currentDate.getFullYear() - 8} – ${currentDate.getFullYear()}`
    }
  }, [selectedView, currentDate])

  const handleFlip = useCallback(
    (direction: 'prev' | 'next') => {
      setCurrentDate((prev) => {
        const year = prev.getFullYear()
        const month = prev.getMonth()
        const step = direction === 'prev' ? -1 : 1

        switch (selectedView) {
          case 'days':
            return new Date(year, month + step, 1)
          case 'months':
            return new Date(year + step, month, 1)
          case 'years':
            return new Date(year + step * 9, month, 1)
          default:
            return prev
        }
      })
    },
    [selectedView]
  )

  return {
    headerLabel,
    handleFlip,
    handleView
  }
}
