import cls from './ExperienceList.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Skeleton } from '@/shared/ui/Skeleton/ui/Skeleton/Skeleton'
import { ExperienceItemSkeleton } from '../ExperienceItem/ExperienceItemSkeleton'

interface ExperienceListSkeletonProps {
  className?: string
}

export const ExperienceListSkeleton = memo(
  (props: ExperienceListSkeletonProps) => {
    const { className } = props

    return (
      <div className={classNames(cls.experienceListSkeleton, {}, [className])}>
        <Skeleton className={cls.title} height="40px" />
        <ExperienceItemSkeleton />
      </div>
    )
  }
)
