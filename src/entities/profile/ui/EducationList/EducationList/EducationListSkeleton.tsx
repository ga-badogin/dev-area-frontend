import cls from './EducationList.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'
import { EducationItemSkeleton } from '../EducationItem/EducationItemSkeleton'

interface EducationListSkeletonProps {
  className?: string
}

export const EducationListSkeleton = memo(
  (props: EducationListSkeletonProps) => {
    const { className } = props

    return (
      <div className={classNames(cls.educationListSkeleton, {}, [className])}>
        <Skeleton className={cls.title} height="40px" />
        <EducationItemSkeleton />
      </div>
    )
  }
)
