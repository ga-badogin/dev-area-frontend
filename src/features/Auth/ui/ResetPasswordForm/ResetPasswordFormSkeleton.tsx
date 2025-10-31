import cls from './ResetPasswordForm.module.scss'
import { memo } from 'react'
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton'

export const ResetPasswordFormSkeleton = memo(() => {
  return (
    <div>
      <Skeleton className={cls.input} />
      <Skeleton className={cls.input} />
      <Skeleton />
    </div>
  )
})
