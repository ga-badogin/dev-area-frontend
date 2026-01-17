import cls from './DatePickerCaption.module.scss'
import { Dispatch, memo, SetStateAction } from 'react'
import { Button, ButtonTheme } from '../../../Button/Button'
import ArrowLeft from '@/shared/assets/icons/ArrowLeft.svg'
import ArrowRight from '@/shared/assets/icons/ArrowRight.svg'
import { Block } from '../../../Block/Block'
import { TDatePickerView } from '../../model/types/datePicker'
import { useDateCaption } from '@/shared/lib/hooks/useDateCaption/useDateCaption'

interface DatePickerCaptionProps {
  className?: string
  currentDate: Date
  setCurrentDate: Dispatch<SetStateAction<Date>>
  view: TDatePickerView
  selectedView: TDatePickerView
  setSelectedView: Dispatch<SetStateAction<TDatePickerView>>
}

export const DatePickerCaption = memo((props: DatePickerCaptionProps) => {
  const {
    className,
    currentDate,
    setSelectedView,
    view,
    selectedView,
    setCurrentDate
  } = props

  const { headerLabel, handleView, handleFlip } = useDateCaption(
    view,
    selectedView,
    setSelectedView,
    currentDate,
    setCurrentDate
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
