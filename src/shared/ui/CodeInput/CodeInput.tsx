import cls from './CodeInput.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { KeyboardEvent, memo, useCallback, useRef, useState } from 'react'

interface CodeInputProps {
  className?: string
  length?: number
}

export const CodeInput = memo((props: CodeInputProps) => {
  const { className, length = 6 } = props

  const inputsRef = useRef<(HTMLInputElement | null)[]>([])
  const [values, setValues] = useState<string[]>(Array(length).fill(''))

  const handleChange = useCallback(
    (value: string, index: number) => {
      if (value.length === 1) {
        const newValues = [...values]
        newValues[index] = value
        setValues(newValues)
        inputsRef.current[index + 1]?.focus()
      }
    },
    [values]
  )

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLInputElement>, index: number) => {
      switch (e.key) {
        case 'ArrowRight':
          inputsRef.current[index + 1]?.focus()
          break
        case 'ArrowLeft':
          inputsRef.current[index - 1]?.focus()
          break
        case 'Backspace':
          const newValues = [...values]
          newValues[index] = ''
          setValues(newValues)
          inputsRef.current[index - 1]?.focus()
          break
      }
    },
    [values, setValues]
  )

  return (
    <div className={classNames(cls.codeInput, {}, [className])}>
      {Array.from({ length }).map((_, index) => (
        <input
          ref={(el) => {
            inputsRef.current[index] = el
          }}
          onChange={(e) => handleChange(e.target.value, index)}
          value={values[index]}
          maxLength={1}
          onKeyDown={(e) => handleKeyDown(e, index)}
          className={cls.input}
          type="number"
          key={index}
        />
      ))}
    </div>
  )
})
