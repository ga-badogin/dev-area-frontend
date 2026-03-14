import cls from './Page.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { forwardRef, ReactNode } from 'react'

interface PageProps {
  className?: string
  children: ReactNode
  container?: boolean
}

export const Page = forwardRef<HTMLDivElement, PageProps>(
  (props: PageProps, ref) => {
    const { className, children, container = false } = props

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
