import cls from './MainPage.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'

interface MainPageProps {
  className?: string
}

export const MainPage = memo((props: MainPageProps) => {
  const { className } = props

  return (
    <div className={classNames(cls.mainPage, {}, [className])}>MAIN PAGE</div>
  )
})
