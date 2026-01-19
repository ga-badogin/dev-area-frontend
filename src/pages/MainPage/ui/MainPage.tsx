import cls from './MainPage.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Page } from '@/shared/ui/Page/Page'

interface MainPageProps {
  className?: string
}

export const MainPage = memo((props: MainPageProps) => {
  const { className } = props

  return (
    <Page className={classNames(cls.mainPage, {}, [className])}>MAIN PAGE</Page>
  )
})
