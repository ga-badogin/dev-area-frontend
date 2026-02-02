import cls from './ProfileForm.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '@/shared/ui/Button/Button'
import { useParams } from 'react-router-dom'
import { profileFormResolver } from '../lib/profileFormResolver'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { updateProfile } from '../model/updateProfile'
import {
  About,
  EducationList,
  ExperienceList,
  IProfile,
  IProfileForm,
  SkillBoard,
  useGetProfile,
  useIsEdit,
  useProfileActions
} from '@/entities/profile'

interface ProfileFormProps {
  className?: string
}

export const ProfileForm = memo((props: ProfileFormProps) => {
  const { className } = props

  const isEdit = useIsEdit()
  const { setIsEdit } = useProfileActions()
  const { username } = useParams()
  const dispatch = useAppDispatch()

  const { data: profile } = useGetProfile(username)

  const onSubmit = async (data: IProfileForm) => {
    const res = await dispatch(updateProfile(data)).unwrap()
    resetForm(res)
  }

  const methods = useForm<IProfileForm>({
    mode: 'onSubmit',
    resolver: profileFormResolver
  })

  const {
    reset,
    handleSubmit,
    formState: { isDirty }
  } = methods

  const resetForm = (data?: IProfile) => {
    if (data) {
      reset(data)
    }
  }

  useEffect(() => {
    resetForm(profile)
  }, [profile])

  return profile ? (
    <FormProvider {...methods}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={classNames(cls.profileForm, {}, [className])}
      >
        <About />
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
        {isDirty && isEdit && <Button type="submit">Сохранить</Button>}
      </form>
    </FormProvider>
  ) : undefined
})
