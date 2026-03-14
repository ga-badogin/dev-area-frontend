import cls from './SearchProfilePage.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Page } from '@/shared/ui/Page/Page'
import {
  mountProfileSearch,
  ProfileSearch,
  profileSearchReducer
} from '@/features/profile-search'
import { useEffect, useRef } from 'react'
import {
  DynamicModuleLoader,
  TReducersList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useSearchParams } from 'react-router-dom'

const reducers: TReducersList = {
  profileSearch: profileSearchReducer
}

interface SearchProfilePageProps {
  className?: string
}

const SearchProfilePage = (props: SearchProfilePageProps) => {
  const { className } = props

  const pageRef = useRef<HTMLDivElement>(null)

  const dispatch = useAppDispatch()
  const [searchParams] = useSearchParams()

  useEffect(() => {
    dispatch(mountProfileSearch(searchParams))
  }, [])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page
        ref={pageRef}
        container
        className={classNames(cls.searchProfilePage, {}, [className])}
      >
        <ProfileSearch className={cls.profileSearch} />
      </Page>
    </DynamicModuleLoader>
  )
}

export default SearchProfilePage
