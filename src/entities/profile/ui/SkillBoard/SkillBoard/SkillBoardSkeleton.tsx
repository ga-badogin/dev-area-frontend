import cls from './SkillBoard.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'
import { Block } from '@/shared/ui/Block/Block'

interface SkillBoardSkeletonProps {
  className?: string
}

export const SkillBoardSkeleton = memo((props: SkillBoardSkeletonProps) => {
  const { className } = props

  return (
    <div className={classNames(cls.skillBoardSkeleton, {}, [className])}>
      <Skeleton className={cls.title} height="40px" />
      <Block className={cls.skillBoard}>
        <Skeleton width="80px" height="67px" />
        <Skeleton width="100px" height="67px" />
        <Skeleton width="150px" height="67px" />
        <Skeleton width="100px" height="67px" />
        <Skeleton width="80px" height="67px" />
      </Block>
    </div>
  )
})
