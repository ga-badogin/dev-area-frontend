import cls from './ExperienceItem.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Block } from '@/shared/ui/Block/Block'
import { Skeleton } from '@/shared/ui/Skeleton/ui/Skeleton/Skeleton'

interface ExperienceItemSkeletonProps {
  className?: string
}

export const ExperienceItemSkeleton = memo(
  (props: ExperienceItemSkeletonProps) => {
    const { className } = props

    return (
      <Block className={classNames(cls.experienceItem, {}, [className])}>
        <Skeleton className={cls.position} height="33px" />
        <Skeleton className={cls.company} height="25px" />
        <Skeleton className={cls.period} height="68px" width="220px" />
        <Skeleton className={cls.description} height="60px" />
      </Block>
    )
  }
)
