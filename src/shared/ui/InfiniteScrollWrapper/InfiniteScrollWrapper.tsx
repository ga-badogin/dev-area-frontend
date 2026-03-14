import cls from './InfiniteScrollWrapper.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { forwardRef, ReactNode, useRef } from 'react'
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import { setRefs } from '@/shared/lib/refs/setRefs'

interface InfiniteScrollWrapperProps {
  className?: string
  children: ReactNode
  onScrollEnd: () => void
}

export const InfiniteScrollWrapper = forwardRef<
  HTMLDivElement,
  InfiniteScrollWrapperProps
>((props: InfiniteScrollWrapperProps, ref) => {
  const { className, children, onScrollEnd } = props

  const wrapperRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  useInfiniteScroll({
    wrapperRef,
    triggerRef,
    callback: onScrollEnd
  })

  return (
    <div
      ref={setRefs(ref, wrapperRef)}
      className={classNames(cls.infiniteScrollWrapper, {}, [className])}
    >
      {children}
      <div ref={triggerRef} />
    </div>
  )
})
