import cls from './ProfileSearch.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useCallback, useRef } from 'react'
import { ProfileList } from '@/entities/profile'
import { SearchFilter } from '../SearchFilter/SearchFilter'
import { useView } from '../../model/selectors/getView'
import { useProfiles } from '../../model/selectors/getProfiles'
import { useIsLoading } from '../../model/selectors/getIsLoading'
import { useSearchParams } from '../../model/selectors/getSearchParams'
import { InfiniteScrollWrapper } from '@/shared/ui/InfiniteScrollWrapper/InfiniteScrollWrapper'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { useProfileSearchActions } from '../../model/slice/profileSearchSlice'
import { useHasMore } from '../../model/selectors/getHasMore'
import { profileSearch } from '../../model/services/profileSearch'

interface ProfileSearchProps {
  className?: string
}

const ProfileSearch = memo((props: ProfileSearchProps) => {
  const { className } = props

  const scrollParentRef = useRef<HTMLDivElement>(null)
  const view = useView()
  const profiles = useProfiles()
  const isLoading = useIsLoading()
  const { limit } = useSearchParams()
  const { nextPage } = useProfileSearchActions()
  const hasMore = useHasMore()
  const dispatch = useAppDispatch()

  const onLoadNextPart = useCallback(() => {
    if (hasMore) {
      nextPage()
      dispatch(profileSearch({}))
    }
  }, [hasMore])

  return (
    <InfiniteScrollWrapper
      ref={scrollParentRef}
      onScrollEnd={onLoadNextPart}
      className={classNames(cls.profileSearch, {}, [className])}
    >
      <SearchFilter className={cls.searchFilter} />
      <ProfileList
        className={cls.profileList}
        profiles={profiles}
        virtualized
        scrollParent={scrollParentRef}
        isLoading={isLoading}
        limit={limit}
        view={view}
      />
    </InfiniteScrollWrapper>
  )
})

export default ProfileSearch
