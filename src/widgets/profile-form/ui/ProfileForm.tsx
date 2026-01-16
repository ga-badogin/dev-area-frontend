import cls from './ProfileForm.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'

import { Button } from '@/shared/ui/Button/Button'
import { useParams } from 'react-router-dom'
import {
  EducationList,
  ExperienceList,
  IProfile,
  ProfileCard,
  SkillBoard,
  useGetProfile,
  useIsEdit,
  useProfileActions
} from '@/entities/profile'
import { profileFormResolver } from '../lib/profileFormResolver'

interface ProfileFormProps {
  className?: string
}

export const ProfileForm = memo((props: ProfileFormProps) => {
  const { className } = props

  const isEdit = useIsEdit()
  const { setIsEdit } = useProfileActions()

  const { username } = useParams()
  const { data: profile } = useGetProfile(username)

  const onSubmit = (data: IProfile) => {
    console.log(data)
  }

  const methods = useForm<IProfile>({
    mode: 'onChange',
    resolver: profileFormResolver
  })

  const resetForm = () => {
    if (profile) {
      methods.reset(profile)
    }
  }

  useEffect(() => {
    resetForm()
  }, [profile])

  return profile ? (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(onSubmit)}
        className={classNames(cls.profileForm, {}, [className])}
      >
        <ProfileCard profile={profile} />
        <ExperienceList />
        <EducationList />
        <SkillBoard />

        {isEdit ? (
          <Button
            type="button"
            onClick={() => {
              setIsEdit(false)
              resetForm()
            }}
          >
            Отмена
          </Button>
        ) : (
          <Button type="button" onClick={() => setIsEdit(true)}>
            Редактировать
          </Button>
        )}
      </form>
    </FormProvider>
  ) : undefined
})
