import cls from './ProfilePage.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Page } from '@/shared/ui/Page/Page'
import { UpdateProfileFormSkeleton } from '@/features/update-profile'

interface ProfilePageSkeletonProps {
  className?: string
}

export const ProfilePageSkeleton = memo((props: ProfilePageSkeletonProps) => {
  const { className } = props

  return (
    <Page
      container
      className={classNames(cls.profilePageSkeleton, {}, [className])}
    >
      <UpdateProfileFormSkeleton />
    </Page>
  )
})
