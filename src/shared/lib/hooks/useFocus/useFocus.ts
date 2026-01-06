import { useCallback, useState } from 'react'

export const useFocus = () => {
  const [isFocused, setIsFocused] = useState(false)

  const onFocus = useCallback(() => {
    setIsFocused(true)
  }, [])

  const onBlur = useCallback(() => {
    setIsFocused(false)
  }, [])

  return {
    isFocused,
    handlers: {
      onFocus,
      onBlur
    }
  }
}
