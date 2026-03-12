import cls from './SearchProfilePage.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { Page } from '@/shared/ui/Page/Page'
import {
  profileSearch,
  ProfileSearch,
  profileSearchReducer,
  useHasMore,
  useProfileSearchActions
} from '@/features/profile-search'
import { useCallback, useRef } from 'react'
import {
  DynamicModuleLoader,
  TReducersList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'

const reducers: TReducersList = {
  profileSearch: profileSearchReducer
}

interface SearchProfilePageProps {
  className?: string
}

const SearchProfilePage = (props: SearchProfilePageProps) => {
  const { className } = props

  const pageRef = useRef<HTMLDivElement>(null)
  const { nextPage } = useProfileSearchActions()
  const hasMore = useHasMore()
  const dispatch = useAppDispatch()

  const onLoadNextPart = useCallback(() => {
    if (hasMore) {
      dispatch(profileSearch({}))
      nextPage()

      console.log('CALLBACK')
    }
  }, [hasMore])

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page
        ref={pageRef}
        container
        onScrollEnd={onLoadNextPart}
        className={classNames(cls.searchProfilePage, {}, [className])}
      >
        <ProfileSearch scrollParent={pageRef} />
      </Page>
    </DynamicModuleLoader>
  )
}

export default SearchProfilePage
