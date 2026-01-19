import cls from './DatePickerCaption.module.scss'
import { Dispatch, memo, SetStateAction, useCallback, useMemo } from 'react'
import { Button, ButtonTheme } from '../../../Button/Button'
import ArrowLeft from '@/shared/assets/icons/ArrowLeft.svg'
import ArrowRight from '@/shared/assets/icons/ArrowRight.svg'
import { Block } from '../../../Block/Block'
import { TDatePickerView } from '../../model/types/datePicker'

interface DatePickerCaptionProps {
  className?: string
  currentDate: Date
  setCurrentDate: Dispatch<SetStateAction<Date>>
  view: TDatePickerView
  selectedView: TDatePickerView
  setSelectedView: Dispatch<SetStateAction<TDatePickerView>>
}

export const DatePickerCaption = memo((props: DatePickerCaptionProps) => {
  const { currentDate, setSelectedView, view, selectedView, setCurrentDate } =
    props

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

  return (
    <Block className={cls.datePickerCaption} padding="10px">
      <Button theme={ButtonTheme.CLEAR} onClick={() => handleFlip('prev')}>
        <ArrowLeft className={cls.arrow} />
      </Button>
      <Button theme={ButtonTheme.CLEAR} onClick={handleView}>
        {headerLabel}
      </Button>
      <Button theme={ButtonTheme.CLEAR} onClick={() => handleFlip('next')}>
        <ArrowRight className={cls.arrow} />
      </Button>
    </Block>
  )
})
