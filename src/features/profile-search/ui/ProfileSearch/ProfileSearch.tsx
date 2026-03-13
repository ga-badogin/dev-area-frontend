import cls from './ProfileSearch.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, RefObject } from 'react'
import { ProfileList } from '@/entities/profile'
import { SearchFilter } from '../SearchFilter/SearchFilter'
import { useView } from '../../model/selectors/getView'
import { useProfiles } from '../../model/selectors/getProfiles'
import { useIsLoading } from '../../model/selectors/getIsLoading'
import { useSearchParams } from '../../model/selectors/getSearchParams'

interface ProfileSearchProps {
  className?: string
  scrollParent: RefObject<HTMLElement | null>
}

export const ProfileSearch = memo((props: ProfileSearchProps) => {
  const { className, scrollParent } = props

  const view = useView()
  const profiles = useProfiles()
  const isLoading = useIsLoading()
  const { limit } = useSearchParams()

  return (
    <div className={classNames(cls.profileSearch, {}, [className])}>
      <SearchFilter />
      <ProfileList
        profiles={profiles}
        virtualized
        scrollParent={scrollParent}
        isLoading={isLoading}
        limit={limit}
        view={view}
      />
    </div>
  )
})
