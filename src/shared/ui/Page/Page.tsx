import cls from './Page.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ReactNode } from 'react'

interface PageProps {
  className?: string
  children: ReactNode
  container?: boolean
  id?: string
}

export const Page = (props: PageProps) => {
  const { className, children, container = false, id = 'PAGE_ID' } = props

  return container ? (
    <div id={id} className={cls.page}>
      <div className={classNames(cls.container, {}, [className])}>
        {children}
      </div>
    </div>
  ) : (
    <div id={id} className={classNames(cls.page, {}, [className])}>
      {children}
    </div>
  )
}
