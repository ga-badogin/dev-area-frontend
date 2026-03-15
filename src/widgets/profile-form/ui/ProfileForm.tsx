import cls from './ProfileForm.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { useParams } from 'react-router-dom'
import { profileFormResolver } from '../lib/profileFormResolver'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { updateProfile } from '../model/updateProfile'
import { ActionBar } from '@/shared/ui/ActionBar/ActionBar'
import { Form } from '@/shared/ui/Form/Form'
import { useNotificationThunks } from '@/entities/notification'
import { OwnerOnly } from '@/features/access-control'
import {
  About,
  EducationList,
  ExperienceList,
  IProfileForm,
  SkillBoard,
  useGetProfile,
  useIsEdit,
  useIsLoading,
  useProfileActions
} from '@/entities/profile'

interface ProfileFormProps {
  className?: string
}

export const ProfileForm = memo((props: ProfileFormProps) => {
  const { className } = props

  const isEdit = useIsEdit()
  const isLoading = useIsLoading()
  const { setIsEdit } = useProfileActions()
  const { username } = useParams()
  const dispatch = useAppDispatch()
  const { addNotification } = useNotificationThunks()
  const methods = useForm<IProfileForm>({
    mode: 'onSubmit',
    resolver: profileFormResolver
  })
  const {
    reset,
    handleSubmit,
    formState: { isDirty }
  } = methods

  const { data: profile } = useGetProfile(username!, { skip: !username })

  useEffect(() => {
    reset(profile)
  }, [profile])

  const onSubmit = async (data: IProfileForm) => {
    const res = await dispatch(updateProfile(data)).unwrap()
    reset(res)
    setIsEdit(false)
  }

  const handleCancel = useCallback(async () => {
    const res = isDirty
      ? await new Promise<boolean>((resolve) => {
          addNotification({
            title: 'Предупреждение',
            paragraph: 'Отмена сбросит все изменения, подтвердить?',
            confirmation: {
              onApprove: () => resolve(true),
              onReject: () => resolve(false)
            }
          })
        })
      : true

    if (res) {
      setIsEdit(false)
      reset()
    }
  }, [isDirty])

  return profile ? (
    <Form
      methods={methods}
      onSubmit={handleSubmit(onSubmit)}
      className={classNames(cls.profileForm, {}, [className])}
    >
      <About />
      <ExperienceList />
      <EducationList />
      <SkillBoard />

      <OwnerOnly userId={profile.userId}>
        <ActionBar>
          {isEdit ? (
            <Button
              type="button"
              theme={ButtonTheme.OUTLINE}
              onClick={handleCancel}
            >
              Отмена
            </Button>
          ) : (
            <Button type="button" onClick={() => setIsEdit(true)}>
              Редактировать
            </Button>
          )}
          {isEdit && (
            <Button type="submit" isLoading={isLoading} disabled={!isDirty}>
              Сохранить
            </Button>
          )}
        </ActionBar>
      </OwnerOnly>
    </Form>
  ) : undefined
})
