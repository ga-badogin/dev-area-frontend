import cls from './RegisterForm.module.scss'
import { memo } from 'react'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'

export const RegisterFormSkeleton = memo(() => {
  return (
    <div>
      <Skeleton className={cls.input} />
      <Skeleton className={cls.input} />
      <Skeleton className={cls.input} />
      <Skeleton className={cls.input} />
      <Skeleton />
    </div>
  )
})
