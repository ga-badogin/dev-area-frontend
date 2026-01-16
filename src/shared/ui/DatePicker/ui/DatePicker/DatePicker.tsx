import cls from './DatePicker.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useCallback, useMemo, useState } from 'react'
import { Button } from '../../../Button/Button'
import { Block } from '../../../Block/Block'
import ArrowRight from '@/shared/assets/icons/ArrowRight.svg'
import ArrowLeft from '@/shared/assets/icons/ArrowLeft.svg'
import { DateGrid } from '../DateGrid/DateGrid'
import { TDateView } from '@/shared/types/date'

type TFlipDirection = 'prev' | 'next'

interface DatePickerProps {
  className?: string
  view?: TDateView
}

export const DatePicker = memo((props: DatePickerProps) => {
  const { className, view } = props

  const [date, setDate] = useState(new Date())
  const [pickerView, setPickerView] = useState<TDateView>(view || 'days')

  const handleViewChange = useCallback(() => {
    if (pickerView === 'days') {
      setPickerView('months')
    } else if (pickerView === 'months') {
      setPickerView('years')
    }
  }, [pickerView])

  const headerLabel = useMemo(() => {
    switch (pickerView) {
      case 'days':
        return `${date.toLocaleDateString('ru-RU', {
          month: 'long'
        })} ${date.getFullYear()}`
      case 'months':
        return date.getFullYear()
      case 'years':
        return `${date.getFullYear() - 8} – ${date.getFullYear()}`
    }
  }, [pickerView, date])

  const handleFlip = useCallback(
    (direction: TFlipDirection) => {
      setDate((prev) => {
        const year = prev.getFullYear()
        const month = prev.getMonth()

        const step = direction === 'prev' ? -1 : 1

        switch (pickerView) {
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
    [pickerView]
  )

  const handleSelect = useCallback(
    (d: Date) => {
      setDate(d)

      if (pickerView === 'years') {
        setPickerView('months')
      } else if (pickerView === 'months') {
        setPickerView('days')
      }
    },
    [pickerView]
  )

  return (
    <Block className={classNames(cls.datePicker, {}, [className])}>
      <div className={cls.header}>
        <Button className={cls.button} onClick={() => handleFlip('prev')}>
          <ArrowLeft className={cls.arrow} />
        </Button>
        <Button onClick={handleViewChange}>{headerLabel}</Button>
        <Button className={cls.button} onClick={() => handleFlip('next')}>
          <ArrowRight className={cls.arrow} />
        </Button>
      </div>

      <DateGrid currentDate={date} view={pickerView} onSelect={handleSelect} />
    </Block>
  )
})
