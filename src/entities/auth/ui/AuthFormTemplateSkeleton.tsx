import cls from './AuthFormTemplate.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Block } from '@/shared/ui/Block/Block'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'

interface AuthFormTemplateSkeletonProps {
  className?: string
  length?: number
}

export const AuthFormTemplateSkeleton = memo(
  (props: AuthFormTemplateSkeletonProps) => {
    const { className, length = 2 } = props

    return (
      <Block className={classNames(cls.authFormWrapper, {}, [className])}>
        <Skeleton height="40px" width="60%" className={cls.title} />
        <Skeleton height="20px" width="90%" />
        {Array.from({ length }).map((_, index) => (
          <Skeleton className={cls.input} key={index} />
        ))}
        <Skeleton className={cls.btn} />
      </Block>
    )
  }
)
