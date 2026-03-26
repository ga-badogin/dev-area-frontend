import cls from './ProfileSearch.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { ProfileListSkeleton } from '@/entities/profile'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'
import { Block } from '@/shared/ui/Block/Block'

interface ProfileSearchSkeletonProps {
  className?: string
}

export const ProfileSearchSkeleton = memo(
  (props: ProfileSearchSkeletonProps) => {
    const { className } = props

    return (
      <div
        className={classNames(cls.profileSearch, {}, [className, cls.skeleton])}
      >
        <Block className={cls.searchFilter}>
          <Skeleton />
        </Block>
        <ProfileListSkeleton className={cls.profileList} length={4} />
      </div>
    )
  }
)
