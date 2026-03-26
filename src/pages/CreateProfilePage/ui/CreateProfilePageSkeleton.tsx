import cls from './CreateProfilePage.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Page } from '@/shared/ui/Page/Page'
import { Loader } from '@/shared/ui/Loader/Loader'

interface CreateProfilePageSkeletonProps {
  className?: string
}

export const CreateProfilePageSkeleton = memo(
  (props: CreateProfilePageSkeletonProps) => {
    const { className } = props

    return (
      <Page
        className={classNames(cls.createProfilePage, {}, [
          className,
          cls.skeleton
        ])}
      >
        <Loader size="100px" />
      </Page>
    )
  }
)
