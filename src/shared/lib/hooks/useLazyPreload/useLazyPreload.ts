import { useEffect, useRef, useState } from 'react'

export const useLazyPreload = <T>(
  condition: boolean,
  preload: () => Promise<T>
) => {
  const [isPreloading, setIsPreloading] = useState<boolean>(false)
  const preloadRef = useRef<Promise<T> | null>(null)

  useEffect(() => {
    if (condition && !preloadRef.current) {
      setIsPreloading(true)

      const promise = preload()
      preloadRef.current = promise

      promise
        .catch(() => (preloadRef.current = null))
        .finally(() => setIsPreloading(false))
    }
  }, [condition, preload])

  return {
    isPreloading
  }
}
