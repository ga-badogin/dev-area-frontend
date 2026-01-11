import cls from './Page.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { ReactNode } from 'react'
import { ValueOf } from '@/shared/types'

export const PageTheme = {
  CONTAINER: 'container',
  FULL: 'full'
}

interface PageProps {
  className?: string
  children: ReactNode
  container?: boolean
  theme?: ValueOf<typeof PageTheme>
}

export const Page = (props: PageProps) => {
  const { className, children, theme = PageTheme.CONTAINER } = props

  return (
    <div className={classNames(cls.page, {}, [className, cls[theme]])}>
      {children}
    </div>
  )
}
