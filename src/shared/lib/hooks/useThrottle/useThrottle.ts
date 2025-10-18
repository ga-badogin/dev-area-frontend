import { useCallback, useRef } from 'react'

export function useThrottle(callback: (args: any) => void, duration: number) {
  const throttleRef = useRef(false)

  return useCallback(
    (args: any) => {
      if (!throttleRef.current) {
        callback(args)
        throttleRef.current = true

        setTimeout(() => {
          throttleRef.current = false
        }, duration)
      }
    },
    [callback, duration]
  )
}
