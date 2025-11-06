import cls from '../AuthForm/AuthForm.module.scss'
import { memo } from 'react'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'

export const LoginFormSkeleton = memo(() => {
  return (
    <div>
      <Skeleton className={cls.input} />
      <Skeleton className={cls.input} />
      <Skeleton className={cls.btn} />
    </div>
  )
})
