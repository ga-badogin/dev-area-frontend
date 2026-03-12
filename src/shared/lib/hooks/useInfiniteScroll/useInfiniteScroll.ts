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

// export function useInfiniteScroll(props: IUseInfiniteScrollProps) {
//   const { callback, triggerRef, wrapperRef } = props
//
//   useEffect(() => {
//     console.log('INFINITE')
//     let observer: IntersectionObserver | null = null
//
//     if (triggerRef.current && callback) {
//       const options = {
//         root: wrapperRef.current,
//         rootMargin: '0px',
//         scrollMargin: '0px',
//         threshold: 1.0
//       }
//
//       observer = new IntersectionObserver(([entry]) => {
//         if (entry.isIntersecting) {
//           callback()
//         }
//       }, options)
//
//       observer.observe(triggerRef.current)
//     }
//
//     return () => {
//       if (observer && triggerRef.current) {
//         observer.unobserve(triggerRef.current)
//       }
//     }
//   }, [triggerRef, wrapperRef, callback])
// }
