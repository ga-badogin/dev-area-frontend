import { useEffect, useRef } from 'react'

export function useTimeout(callback: () => void, duration: number) {
  const timer = useRef<NodeJS.Timeout | undefined>(undefined)

  useEffect(() => {
    timer.current = setTimeout(callback, duration)

    return () => clearTimeout(timer.current)
  }, [callback, duration])
}
