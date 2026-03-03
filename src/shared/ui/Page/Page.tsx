import cls from './Page.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ReactNode } from 'react'

interface PageProps {
  className?: string
  children: ReactNode
  container?: boolean
}

export const Page = (props: PageProps) => {
  const { className, children, container = false } = props

  return container ? (
    <div id="PAGE_ID" className={cls.page}>
      <div className={classNames(cls.container, {}, [className])}>
        {children}
      </div>
    </div>
  ) : (
    <div className={classNames(cls.page, {}, [className])}>{children}</div>
  )
}
