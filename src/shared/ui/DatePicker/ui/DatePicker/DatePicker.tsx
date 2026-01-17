import cls from './DatePicker.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useState } from 'react'
import { Block } from '../../../Block/Block'
import { TDatePickerView } from '../../model/types/datePicker'
import { DatePickerGrid } from '../DatePickerGrid/DatePickerGrid'
import { DatePickerCaption } from '../DatePickerCaption/DatePickerCaption'

interface DatePickerProps {
  className?: string
  view?: TDatePickerView
}

export const DatePicker = memo((props: DatePickerProps) => {
  const { className, view = 'days' } = props

  const [selectedView, setSelectedView] = useState(view)
  const [currentDate, setCurrentDate] = useState(new Date())

  return (
    <Block
      className={classNames(cls.datePicker, {}, [className])}
      padding="12px"
    >
      <DatePickerCaption
        view={view}
        setCurrentDate={setCurrentDate}
        selectedView={selectedView}
        currentDate={currentDate}
        setSelectedView={setSelectedView}
      />
      <DatePickerGrid currentDate={currentDate} view={selectedView} />
    </Block>
  )
})
