import cls from './Page.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { forwardRef, ReactNode, useRef } from 'react'
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'
import { setRefs } from '@/shared/lib/refs/setRefs'

interface PageProps {
  className?: string
  children: ReactNode
  container?: boolean
  onScrollEnd?: () => void
}

export const Page = forwardRef<HTMLDivElement, PageProps>(
  (props: PageProps, ref) => {
    const { className, children, container = false, onScrollEnd } = props

    const wrapperRef = useRef<HTMLDivElement>(null)
    const triggerRef = useRef<HTMLDivElement>(null)

    useInfiniteScroll({
      wrapperRef,
      triggerRef,
      callback: onScrollEnd
    })

    return container ? (
      <div ref={setRefs(ref, wrapperRef)} className={cls.page}>
        <div className={classNames(cls.container, {}, [className])}>
          {children}
          <div ref={triggerRef} />
        </div>
      </div>
    ) : (
      <div ref={ref} className={classNames(cls.page, {}, [className])}>
        {children}
      </div>
    )
  }
)
