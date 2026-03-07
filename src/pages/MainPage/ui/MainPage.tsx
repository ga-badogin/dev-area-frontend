import cls from './MainPage.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Page } from '@/shared/ui/Page/Page'
import { SearchProfiles } from '@/features/search-profiles'

interface MainPageProps {
  className?: string
}

export const MainPage = memo((props: MainPageProps) => {
  const { className } = props

  return (
    <Page
      id={'MAIN_PAGE_ID'}
      container
      className={classNames(cls.mainPage, {}, [className])}
    >
      <SearchProfiles />
    </Page>
  )
})
