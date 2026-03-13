import { RefObject, useEffect, useRef } from 'react'

export interface IUseInfiniteScrollProps {
  callback?: () => void
  triggerRef: RefObject<HTMLElement | null>
  wrapperRef: RefObject<HTMLElement | null>
}

export function useInfiniteScroll(props: IUseInfiniteScrollProps) {
  const { callback, triggerRef, wrapperRef } = props

  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    console.log('INFINITE')
    if (triggerRef.current && callback) {
      observerRef.current?.disconnect()

      observerRef.current = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            callback()
          }
        },
        {
          root: wrapperRef.current,
          rootMargin: '0px',
          threshold: 1.0
        }
      )

      observerRef.current.observe(triggerRef.current)
    }

    return () => {
      observerRef.current?.disconnect()
    }
  }, [triggerRef, wrapperRef, callback])
}
