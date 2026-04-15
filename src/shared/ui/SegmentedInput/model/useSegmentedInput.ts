import {
  ChangeEvent,
  ClipboardEvent,
  KeyboardEvent,
  useCallback,
  useRef
} from 'react'

export const useSegmentedInput = (
  length: number,
  inputMode: 'text' | 'numeric'
) => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([])

  const handleChange = useCallback(
    (
      e: ChangeEvent<HTMLInputElement>,
      index: number,
      fieldValue?: string,
      onChange?: (value: string) => void
    ) => {
      const { value } = e.target

      const pattern = inputMode === 'text' ? /^[a-zA-Zа-яА-ЯёЁ0-9]$/ : /^\d$/

      if (pattern.test(value)) {
        if (fieldValue && onChange) {
          const chars = fieldValue.split('')
          chars[index] = value
          const nextValue = chars.join('').slice(0, length)
          onChange(nextValue)
        }

        inputsRef.current[index + 1]?.focus()
      }
    },
    [length, inputMode]
  )

  const handlePaste = useCallback(
    (
      e: ClipboardEvent<HTMLInputElement>,
      onChange?: (value: string) => void
    ) => {
      e.preventDefault()

      const pattern = inputMode === 'text' ? /[^a-zA-Zа-яА-ЯёЁ]/g : /\D/g

      const pastedText = e.clipboardData
        .getData('text')
        .replace(pattern, '')
        .slice(0, length)

      if (!pastedText) return

      onChange?.(pastedText)

      const focusIndex =
        pastedText.length >= length ? length - 1 : pastedText.length
      inputsRef.current[focusIndex]?.focus()
    },
    [length, inputMode]
  )

  const handleKeyDown = useCallback(
    (
      e: KeyboardEvent<HTMLInputElement>,
      index: number,
      fieldValue?: string,
      onChange?: (value: string) => void
    ) => {
      switch (e.key) {
        case 'ArrowRight':
          inputsRef.current[index + 1]?.focus()
          break
        case 'ArrowLeft':
          inputsRef.current[index - 1]?.focus()
          break
        case 'Backspace':
          const currentInput = inputsRef.current[index]
          const prevInput = inputsRef.current[index - 1]

          if (fieldValue && onChange) {
            const chars = fieldValue.split('')

            if (chars[index]) {
              chars[index] = ''
            } else {
              prevInput?.focus()
              chars[index - 1] = ''
            }

            onChange(chars.join(''))
          } else {
            if (currentInput?.value) {
              currentInput.value = ''
            } else if (prevInput) {
              prevInput.focus()
              prevInput.value = ''
            }
          }
          break
      }
    },
    []
  )

  return {
    inputsRef,
    handleChange,
    handleKeyDown,
    handlePaste
  }
}
