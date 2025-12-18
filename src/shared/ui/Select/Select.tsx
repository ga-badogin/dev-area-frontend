import cls from './Select.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { CSSProperties, memo, ReactNode, useMemo } from 'react'
import { typedMemo } from '@/shared/consts/memo'
import { Button, ButtonTheme } from '../Button/Button'

interface SelectProps<T> {
  className?: string
  selectedValue: T
  onSelect: (value: T) => void
  options: { content: ReactNode; value: T }[]
}

export const Select = typedMemo(<T,>(props: SelectProps<T>) => {
  const { className, options, onSelect, selectedValue } = props

  const sliderPosition = useMemo(() => {
    return options.findIndex((option) => option.value === selectedValue)
  }, [selectedValue])

  const sliderStyle: CSSProperties = {
    width: `calc(100% / ${options.length})`,
    left: `calc(100% / ${options.length} * ${sliderPosition})`
  }

  return (
    <div className={classNames(cls.select, {}, [className])}>
      {options.map(({ content, value }, index) => (
        <Button
          theme={ButtonTheme.CLEAR}
          onClick={() => onSelect(value)}
          key={index}
        >
          {content}
        </Button>
      ))}
      <div className={cls.slider} style={sliderStyle} />
    </div>
  )
})
