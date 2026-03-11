import cls from './SearchProfilePage.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Page } from '@/shared/ui/Page/Page'
import { ProfileSearch, profileSearchReducer } from '@/features/profile-search'
import { useRef } from 'react'
import {
  DynamicModuleLoader,
  TReducersList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const reducers: TReducersList = {
  profileSearch: profileSearchReducer
}

interface SearchProfilePageProps {
  className?: string
}

const SearchProfilePage = (props: SearchProfilePageProps) => {
  const { className } = props

  const pageRef = useRef<HTMLDivElement>(null)

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page
        ref={pageRef}
        container
        className={classNames(cls.searchProfilePage, {}, [className])}
      >
        <ProfileSearch scrollParent={pageRef} />
      </Page>
    </DynamicModuleLoader>
  )
}

export default SearchProfilePage
