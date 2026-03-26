import cls from './ProfileList.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { ProfileCardSkeleton } from '../ProfileCard/ProfileCardSkeleton'

interface ProfileListSkeletonProps {
  className?: string
  length: number
}

export const ProfileListSkeleton = memo((props: ProfileListSkeletonProps) => {
  const { className, length } = props

  return (
    <div className={classNames(cls.profileList, {}, [className])}>
      {Array.from({ length }).map((_, index) => (
        <ProfileCardSkeleton key={index} />
      ))}
    </div>
  )
})
