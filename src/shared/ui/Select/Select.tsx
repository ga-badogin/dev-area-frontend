import cls from './Select.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { CSSProperties, ReactNode, useMemo } from 'react'
import { typedMemo } from '@/shared/consts/memo'
import { Button, ButtonTheme } from '../Button/Button'

export type TSelectConfig<T> = {
  content: ReactNode
  value: T
}[]

interface SelectProps<T> {
  className?: string
  selectedValue: T
  onSelect: (value: T) => void
  options: TSelectConfig<T>
}

export const Select = typedMemo(<T,>(props: SelectProps<T>) => {
  const { className, options, onSelect, selectedValue } = props

  const sliderPosition = useMemo(() => {
    return options.findIndex((option) => option.value === selectedValue)
  }, [selectedValue, options])

  const sliderStyle: CSSProperties = {
    width: `${100 / options.length}%`,
    transform: `translateX(${sliderPosition * 100}%)`
  }

  return sliderPosition >= 0 ? (
    <div className={classNames(cls.select, {}, [className])}>
      {options.map(({ content, value }, index) => (
        <Button
          className={cls.button}
          theme={ButtonTheme.CLEAR}
          onClick={() => onSelect(value)}
          key={index}
        >
          {content}
        </Button>
      ))}
      <div className={cls.slider} style={sliderStyle} />
    </div>
  ) : undefined
})
