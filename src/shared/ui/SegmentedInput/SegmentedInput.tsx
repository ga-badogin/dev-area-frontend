import clsInput from '../Input/Input.module.scss'
import clsSegmentedInput from './SegmentedInput.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useEffect } from 'react'
import { useSegmentedInput } from './model/useSegmentedInput'
import { ErrorList } from '../ErrorList/ErrorList'

const cls = {
  ...clsInput,
  ...clsSegmentedInput
}

interface SegmentedInputProps {
  className?: string
  length: number
  error?: string

  value: string
  onChange: () => void
}

export const SegmentedInput = memo((props: SegmentedInputProps) => {
  const { className, value, length, onChange, error } = props

  const { inputsRef, handlePaste, handleKeyDown, handleChange } =
    useSegmentedInput(length)

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
            className={classNames(cls.input, {}, [cls.main, cls.segment])}
            inputMode="numeric"
            key={index}
          />
        ))}
      </div>

      <ErrorList error={error} />
    </div>
  )
})
