import cls from './CalendarControls.module.scss'
import { Dispatch, memo, SetStateAction } from 'react'
import { Block } from '../../../Block/Block'
import { Button, ButtonTheme } from '../../../Button/Button'
import ArrowLeft from '@/shared/assets/icons/ArrowLeft.svg'
import ArrowRight from '@/shared/assets/icons/ArrowRight.svg'
import { useCalendarControls } from './useCalendarControls'
import { TCalendarView } from '../../model/types/calendar'
import { Sizes } from '@/shared/consts/ui'

interface CalendarControlsProps {
  className?: string
  calendarDate: Date
  setCalendarDate: Dispatch<SetStateAction<Date>>
  initialView: TCalendarView
  view: TCalendarView
  setView: Dispatch<SetStateAction<TCalendarView>>
}

export const CalendarControls = memo((props: CalendarControlsProps) => {
  const { className, ...otherProps } = props

  const { headerLabel, handleFlip, handleView } =
    useCalendarControls(otherProps)

  return (
    <Block className={cls.datePickerCaption}>
      <Button theme={ButtonTheme.CLEAR} onClick={() => handleFlip('prev')}>
        <ArrowLeft className={cls.arrow} />
      </Button>
      <Button fontSize={Sizes.S} theme={ButtonTheme.CLEAR} onClick={handleView}>
        {headerLabel}
      </Button>
      <Button theme={ButtonTheme.CLEAR} onClick={() => handleFlip('next')}>
        <ArrowRight className={cls.arrow} />
      </Button>
    </Block>
  )
})
