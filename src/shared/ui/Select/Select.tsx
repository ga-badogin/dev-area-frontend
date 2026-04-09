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

  const sliderStyle = useMemo((): CSSProperties => {
    const position = options.findIndex(
      (option) => option.value === selectedValue
    )

    return {
      width: `${100 / options.length}%`,
      ...(position >= 0
        ? { transform: `translateX(${position * 100}%)` }
        : { opacity: 0 })
    }
  }, [selectedValue, options])

  return (
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
  )
})
