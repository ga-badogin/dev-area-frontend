import { useCallback, useRef } from 'react'

export function useDebounce<T extends (...args: any[]) => any>(
  callback: T,
  duration: number
): (
  args: Parameters<T>,
  isValid: boolean
) => Promise<Awaited<ReturnType<T>>> | void {
  const timer = useRef<NodeJS.Timeout | null>(null)

  return useCallback(
    (
      args: Parameters<T>,
      isValid: boolean
    ): Promise<Awaited<ReturnType<T>>> | void => {
      if (isValid) {
        return new Promise((resolve) => {
          if (timer.current) {
            console.log('clearPromiseTimeout')
            clearTimeout(timer.current)
          }

          timer.current = setTimeout(async () => {
            const result = await callback(...args)
            timer.current = null
            resolve(result)
          }, duration)
        })
      } else {
        if (timer.current) {
          console.log('clearTimeout')
          clearTimeout(timer.current)
          timer.current = null
        }
      }
    },
    [callback, duration]
  )
}
