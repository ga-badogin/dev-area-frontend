import cls from './SearchProfilePage.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Page } from '@/shared/ui/Page/Page'
import { ProfileSearchSkeleton } from '@/features/profile-search'

interface SearchProfilePageSkeletonProps {
  className?: string
}

export const SearchProfilePageSkeleton = memo(
  (props: SearchProfilePageSkeletonProps) => {
    const { className } = props

    return (
      <Page
        container
        className={classNames(cls.searchProfilePage, {}, [className])}
      >
        <ProfileSearchSkeleton className={cls.profileSearch} />
      </Page>
    )
  }
)
