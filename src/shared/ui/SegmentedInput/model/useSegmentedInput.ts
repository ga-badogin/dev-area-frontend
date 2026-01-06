import {
  ChangeEvent,
  ClipboardEvent,
  KeyboardEvent,
  useCallback,
  useRef
} from 'react'

export const useSegmentedInput = (length: number) => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([])

  const handleChange = useCallback(
    (
      e: ChangeEvent<HTMLInputElement>,
      index: number,
      fieldValue: string,
      onChange: (value: string) => void
    ) => {
      const { value } = e.target

      if (/^\d$/.test(value) && value.length === 1) {
        const chars = fieldValue.split('')
        chars[index] = value
        const nextValue = chars.join('').slice(0, length)

        onChange(nextValue)

        inputsRef.current[index + 1]?.focus()
      }
    },
    [length]
  )

  const handlePaste = useCallback(
    (
      e: ClipboardEvent<HTMLInputElement>,
      onChange: (value: string) => void
    ) => {
      e.preventDefault()

      const pastedText = e.clipboardData
        .getData('text')
        .replace(/\D/g, '')
        .slice(0, length)

      if (!pastedText) return

      onChange(pastedText)

      const focusIndex =
        pastedText.length >= length ? length - 1 : pastedText.length
      inputsRef.current[focusIndex]?.focus()
    },
    [length]
  )

  const handleKeyDown = useCallback(
    (
      e: KeyboardEvent<HTMLInputElement>,
      index: number,
      fieldValue: string,
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
          const chars = fieldValue.split('')

          if (chars[index]) {
            chars[index] = ''
          } else {
            inputsRef.current[index - 1]?.focus()
            chars[index - 1] = ''
          }

          onChange(chars.join(''))
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
