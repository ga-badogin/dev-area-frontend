import cls from './Skeleton.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { CSSProperties, memo } from 'react'

interface SkeletonProps {
  className?: string
  width?: string
  height?: string
}

export const Skeleton = memo((props: SkeletonProps) => {
  const { className, width, height } = props

  const styles: CSSProperties = {
    width,
    height
  }

  return (
    <div className={classNames(cls.skeleton, {}, [className])} style={styles} />
  )
})
