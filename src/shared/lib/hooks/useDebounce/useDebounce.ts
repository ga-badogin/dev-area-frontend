import { useCallback, useRef } from 'react'

export function useDebounce(callback: (args: any) => void, duration: number) {
  const timer = useRef<any>(null)

  return useCallback(() => {
    if (timer.current) {
      clearTimeout(timer.current)
    }

    timer.current = setTimeout(callback, duration)
  }, [callback, duration])
}
