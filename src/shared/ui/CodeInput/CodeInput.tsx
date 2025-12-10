import cls from './CodeInput.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { KeyboardEvent, useCallback, useRef, useState } from 'react'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'

interface CodeInputProps<T extends FieldValues> {
  className?: string
  length?: number

  control: Control<T>
  codeName: Path<T>
}

export const CodeInput = <T extends FieldValues>(props: CodeInputProps<T>) => {
  const { className, length = 6, control, codeName } = props

  const inputsRef = useRef<(HTMLInputElement | null)[]>([])
  const [values, setValues] = useState<string[]>(Array(length).fill(''))

  const handleChange = useCallback(
    (value: string, index: number, onChange: (value: string) => void) => {
      if (value.length === 1) {
        const newValues = [...values]
        newValues[index] = value
        setValues(newValues)
        onChange(newValues.join(''))

        inputsRef.current[index + 1]?.focus()
      }
    },
    [values]
  )

  const handleKeyDown = useCallback(
    (
      e: KeyboardEvent<HTMLInputElement>,
      index: number,
      onChange: (value: string) => void
    ) => {
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
          onChange(newValues.join(''))

          inputsRef.current[index - 1]?.focus()
          break
      }
    },
    [values, setValues]
  )

  return (
    <div className={classNames(cls.codeInput, {}, [className])}>
      <Controller
        name={codeName}
        control={control}
        render={({ field }) => (
          <>
            {Array.from({ length }).map((_, index) => (
              <input
                ref={(el) => {
                  inputsRef.current[index] = el
                }}
                value={values[index]}
                onChange={(e) =>
                  handleChange(e.target.value, index, field.onChange)
                }
                onKeyDown={(e) => handleKeyDown(e, index, field.onChange)}
                maxLength={1}
                className={cls.input}
                type="number"
                key={index}
              />
            ))}
          </>
        )}
      />
    </div>
  )
}
