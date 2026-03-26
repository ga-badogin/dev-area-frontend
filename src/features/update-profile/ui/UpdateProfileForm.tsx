import cls from './UpdateProfileForm.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { useParams } from 'react-router-dom'
import { updateProfileFormResolver } from '../lib/updateProfileFormResolver'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { updateProfile } from '../model/services/updateProfile'
import { ActionBar } from '@/shared/ui/ActionBar/ActionBar'
import { Form } from '@/shared/ui/Form/Form'
import { useNotificationThunks } from '@/entities/notification'
import { OwnerOnly } from '../../access-control'
import { useIsLoading } from '../model/selectors/getIsLoading'
import { useIsEdit } from '../model/selectors/getIsEdit'
import { useUpdateProfileActions } from '../model/slice/updateProfileSlice'
import { UpdateProfileFormSkeleton } from './UpdateProfileFormSkeleton'
import {
  AboutAsync,
  EducationListAsync,
  ExperienceListAsync,
  IProfileForm,
  SkillBoardAsync,
  useGetProfile
} from '@/entities/profile'

interface ProfileFormProps {
  className?: string
}

export const UpdateProfileForm = memo((props: ProfileFormProps) => {
  const { className } = props

  const isEdit = useIsEdit()
  const isLoading = useIsLoading()
  const { setIsEdit } = useUpdateProfileActions()
  const { username } = useParams()
  const dispatch = useAppDispatch()
  const { addNotification } = useNotificationThunks()
  const methods = useForm<IProfileForm>({
    mode: 'onSubmit',
    resolver: updateProfileFormResolver
  })
  const {
    reset,
    handleSubmit,
    formState: { isDirty }
  } = methods

  const { data: profile } = useGetProfile(username!, { skip: !username })

  const onSubmit = async (data: IProfileForm) => {
    const res = await dispatch(updateProfile(data)).unwrap()
    reset(res)
  }

  useEffect(() => {
    reset(profile)
  }, [profile])

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
      <AboutAsync isEdit={isEdit} />
      <ExperienceListAsync isEdit={isEdit} />
      <EducationListAsync isEdit={isEdit} />
      <SkillBoardAsync isEdit={isEdit} />

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
  ) : (
    <UpdateProfileFormSkeleton />
  )
})
