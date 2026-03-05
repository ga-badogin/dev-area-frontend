import cls from './ProfileForm.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { useParams } from 'react-router-dom'
import { profileFormResolver } from '../lib/profileFormResolver'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { updateProfile } from '../model/updateProfile'
import { ActionBar } from '@/shared/ui/ActionBar/ActionBar'
import { Form } from '@/shared/ui/Form/Form'
import {
  About,
  EducationList,
  ExperienceList,
  IProfileForm,
  SkillBoard,
  useGetProfile,
  useIsEdit,
  useProfileActions
} from '@/entities/profile'
import { useNotificationThunks } from '@/entities/notification'

interface ProfileFormProps {
  className?: string
}

export const ProfileForm = memo((props: ProfileFormProps) => {
  const { className } = props

  const isEdit = useIsEdit()
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

  const { data: profile } = useGetProfile(username)

  useEffect(() => {
    reset(profile)
  }, [profile])

  const onSubmit = async (data: IProfileForm) => {
    const res = await dispatch(updateProfile(data)).unwrap()
    reset(res)
  }

  const handleCancel = async () => {
    const res = await new Promise<boolean>((resolve) => {
      addNotification({
        title: 'Предупреждение',
        paragraph: 'Отмена сбросит все изменения, подтвердить?',
        onApprove: () => resolve(true),
        onReject: () => resolve(false)
      })
    })

    if (res) {
      setIsEdit(false)
      reset()
    }
  }

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
          <Button type="submit" disabled={!isDirty}>
            Сохранить
          </Button>
        )}
      </ActionBar>
    </Form>
  ) : undefined
})
