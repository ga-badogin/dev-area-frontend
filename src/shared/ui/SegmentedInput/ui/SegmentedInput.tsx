import cls from './SegmentedInput.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useEffect } from 'react'
import { useSegmentedInput } from '../model/useSegmentedInput'
import { ErrorList } from '../../ErrorList/ErrorList'
import { ValueOf } from '@/shared/types'
import { Sizes } from '@/shared/consts/ui'
import { FieldTheme } from '@/shared/types/style'
import { FieldError } from 'react-hook-form'

interface SegmentedInputProps {
  className?: string
  length?: number
  error?: FieldError

  value?: string
  onChange?: () => void

  inputMode?: 'text' | 'numeric'
  fontSize?: ValueOf<typeof Sizes>
  theme?: ValueOf<typeof FieldTheme>
}

export const SegmentedInput = memo((props: SegmentedInputProps) => {
  const {
    className,
    value,
    length = 6,
    onChange,
    error,
    inputMode = 'text',
    fontSize = Sizes.XXL,
    theme = FieldTheme.MAIN
  } = props

  const { inputsRef, handlePaste, handleKeyDown, handleChange } =
    useSegmentedInput(length, inputMode)

  useEffect(() => {
    inputsRef.current[0]?.focus()
  }, [])

  return (
    <div className={className}>
      <div className={cls.segmentedInput}>
        {Array.from({ length }).map((_, index) => (
          <input
            ref={(el) => {
              inputsRef.current[index] = el
            }}
            value={value?.[index]}
            onChange={(e) => handleChange(e, index, value, onChange)}
            onKeyDown={(e) => handleKeyDown(e, index, value, onChange)}
            onPaste={(e) => handlePaste(e, onChange)}
            maxLength={1}
            className={classNames(cls.input, { [cls.error]: Boolean(error) }, [
              cls[fontSize],
              cls[theme]
            ])}
            inputMode={inputMode}
            key={index}
          />
        ))}
      </div>

      <ErrorList error={error} />
    </div>
  )
})
