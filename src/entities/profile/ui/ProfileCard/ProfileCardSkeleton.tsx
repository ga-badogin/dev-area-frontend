import cls from './ProfileCard.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Block } from '@/shared/ui/Block/Block'
import { Skeleton } from '@/shared/ui/Skeleton/ui/Skeleton/Skeleton'

interface ProfileCardSkeletonProps {
  className?: string
}

export const ProfileCardSkeleton = memo((props: ProfileCardSkeletonProps) => {
  const { className } = props

  return (
    <Block className={classNames(cls.profileCard, {}, [className])}>
      <Skeleton height="150px" width="150px" className={cls.image} />
      <div className={cls.wrapper}>
        <Skeleton height="56px" />
        <Skeleton height="20px" className={cls.bio} />
      </div>
    </Block>
  )
})
