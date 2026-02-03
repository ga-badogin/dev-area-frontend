import { useCallback, useEffect, useRef } from 'react'

export function useDebounce<T extends (...args: any[]) => any>(
  callback: T,
  duration: number
): (...args: Parameters<T>) => void {
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    return () => {
      if (timer.current) {
        clearTimeout(timer.current)
      }
    }
  }, [])

  return useCallback(
    (...args) => {
      if (timer.current) {
        console.log('clear')
        clearTimeout(timer.current)
      }

      timer.current = setTimeout(() => {
        console.log('timeout')
        callback(...args)
      }, duration)
    },
    [callback, duration]
  )
}
