import { classNames } from '@/shared/lib/classNames/classNames'
import cls from './About.module.scss'
import { memo } from 'react'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'

interface AboutSkeletonProps {
  className?: string
}

export const AboutSkeleton = memo((props: AboutSkeletonProps) => {
  const { className } = props

  return (
    <div className={cls.profileCard}>
      <Skeleton width="250px" height="250px" className={cls.icon} />
      <Skeleton height="107px" className={cls.fields} />
      <Skeleton height="104px" className={cls.block} />
    </div>
  )
})
