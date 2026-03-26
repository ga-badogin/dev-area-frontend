import cls from './UpdateProfileForm.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import {
  AboutSkeleton,
  EducationListSkeleton,
  ExperienceListSkeleton,
  SkillBoardSkeleton
} from '@/entities/profile'

interface ProfileFormSkeletonProps {
  className?: string
}

export const UpdateProfileFormSkeleton = memo(
  (props: ProfileFormSkeletonProps) => {
    const { className } = props

    return (
      <div className={classNames(cls.profileForm, {}, [className])}>
        <AboutSkeleton />
        <ExperienceListSkeleton />
        <EducationListSkeleton />
        <SkillBoardSkeleton />
      </div>
    )
  }
)
