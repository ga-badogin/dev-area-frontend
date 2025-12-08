import { useCallback, useRef } from 'react'

export function useDebounce<T extends (...args: any[]) => void>(
  callback: T,
  duration: number
) {
  const timer = useRef<any>(null)

  return useCallback(
    (...args: Parameters<T>) => {
      if (timer.current) {
        clearTimeout(timer.current)
      }

      timer.current = setTimeout(() => callback(...args), duration)
    },
    [callback, duration]
  )
}
