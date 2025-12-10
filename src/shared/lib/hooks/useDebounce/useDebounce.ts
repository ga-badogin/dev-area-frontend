import { useCallback, useRef } from 'react'

export function useDebounce<T extends (...args: any[]) => any>(
  callback: T,
  duration: number
): [(...args: Parameters<T>) => Promise<Awaited<ReturnType<T>>>, () => void] {
  const timer = useRef<NodeJS.Timeout | null>(null)

  return [
    useCallback(
      (...args: Parameters<T>): Promise<Awaited<ReturnType<T>>> => {
        return new Promise((resolve) => {
          if (timer.current) {
            clearTimeout(timer.current)
          }

          timer.current = setTimeout(async () => {
            // ждем callback внутри, чтобы не образовался Promise<Promise<T>>
            const result = await callback(...args)
            resolve(result)
          }, duration)
        })
      },
      [callback, duration]
    ),
    useCallback(() => {
      if (timer.current) {
        console.log('delete timer')
        clearTimeout(timer.current)
      }
    }, [timer])
  ]
}
