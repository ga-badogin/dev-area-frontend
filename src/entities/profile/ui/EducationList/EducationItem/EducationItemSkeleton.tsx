import cls from './EducationItem.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Block } from '@/shared/ui/Block/Block'
import { Skeleton } from '@/shared/ui/Skeleton/ui/Skeleton/Skeleton'

interface EducationItemSkeletonProps {
  className?: string
}

export const EducationItemSkeleton = memo(
  (props: EducationItemSkeletonProps) => {
    const { className } = props

    return (
      <Block className={classNames(cls.educationItem, {}, [className])}>
        <Skeleton className={cls.speciality} height="33px" />
        <Skeleton className={cls.institution} height="25px" />
        <Skeleton className={cls.period} height="68px" width="220px" />
      </Block>
    )
  }
)
