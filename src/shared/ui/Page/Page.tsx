import cls from './Page.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { forwardRef, ReactNode, useRef } from 'react'
import { useInfiniteScroll } from '@/shared/lib/hooks/useInfiniteScroll/useInfiniteScroll'

interface PageProps {
  className?: string
  children: ReactNode
  container?: boolean
}

export const Page = forwardRef<HTMLDivElement, PageProps>(
  (props: PageProps, ref) => {
    const { className, children, container = false } = props

    const wrapperRef = useRef<HTMLDivElement>(null)
    const triggerRef = useRef<HTMLDivElement>(null)

    useInfiniteScroll({
      wrapperRef,
      triggerRef,
      callback: () => console.log('END')
    })

    return container ? (
      <div ref={ref} className={cls.page}>
        <div className={classNames(cls.container, {}, [className])}>
          {children}
        </div>
      </div>
    ) : (
      <div ref={ref} className={classNames(cls.page, {}, [className])}>
        {children}
      </div>
    )
  }
)
