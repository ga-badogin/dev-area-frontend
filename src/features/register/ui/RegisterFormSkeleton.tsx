import { cls } from '@/entities/auth'
import { memo } from 'react'
import { Skeleton } from '@/shared/ui/Skeleton/ui/Skeleton/Skeleton'

export const RegisterFormSkeleton = memo(() => {
  return (
    <div>
      <Skeleton className={cls.input} />
      <Skeleton className={cls.input} />
      <Skeleton className={cls.input} />
      <Skeleton className={cls.btn} />
    </div>
  )
})
