import cls from './BlockSkeleton.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'

interface BlockSkeletonProps {
  className?: string
}

export const BlockSkeleton = memo((props: BlockSkeletonProps) => {
  const { className } = props

  return <div className={classNames(cls.blockSkeleton, {}, [className])}></div>
})
