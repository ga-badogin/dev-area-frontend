import cls from './SegmentedInput.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useEffect } from 'react'
import { useSegmentedInput } from './model/useSegmentedInput'
import { ErrorList } from '../ErrorList/ErrorList'

interface SegmentedInputProps {
  className?: string
  length: number
  error?: string

  value: string
  onChange: () => void

  inputMode?: 'text' | 'numeric'
}

export const SegmentedInput = memo((props: SegmentedInputProps) => {
  const {
    className,
    value,
    length,
    onChange,
    error,
    inputMode = 'text'
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
            value={value[index] ?? ''}
            onChange={(e) => handleChange(e, index, value, onChange)}
            onKeyDown={(e) => handleKeyDown(e, index, value, onChange)}
            onPaste={(e) => handlePaste(e, onChange)}
            maxLength={1}
            className={classNames(cls.input, { [cls.error]: error }, [
              cls.main
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
