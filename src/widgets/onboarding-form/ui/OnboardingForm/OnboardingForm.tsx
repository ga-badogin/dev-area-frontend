import cls from './OnboardingForm.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { profileFormResolver } from '../../../profile-form/lib/profileFormResolver'
import {
  IProfileForm,
  useCreateProfile,
  useProfileActions
} from '@/entities/profile'
import { RenderRouter } from '@/app/providers/router/exclude'
import { onboardingRouteConfig } from '../../lib/onboardingRouteConfig'
import { ActionBar } from '@/shared/ui/ActionBar/ActionBar'
import { Select } from '@/shared/ui/Select/Select'
import { onboardingSelectConfig } from '../../lib/onboardingSelectConfig'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { getOnboardingRoute } from '@/shared/lib/router/getRoute'
import { chainNavigation } from '../../model/consts/navigate'
import { useNotificationThunks } from '@/entities/notification'
import { Form } from '@/shared/ui/Form/Form'
import { Title } from '@/shared/ui/Title/Title'
import { Paragraph } from '@/shared/ui/Paragraph/Paragraph'
import { onboardingRoutesContent } from '../../model/consts/content'

interface OnboardingFormProps {
  className?: string
}

export const OnboardingForm = memo((props: OnboardingFormProps) => {
  const { className } = props

  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { addNotification } = useNotificationThunks()
  const [createProfile, {}] = useCreateProfile()
  const { setIsEdit } = useProfileActions()

  const methods = useForm<IProfileForm>({
    mode: 'onSubmit',
    resolver: profileFormResolver
  })

  const { handleSubmit, trigger } = methods

  useEffect(() => {
    setIsEdit(true)
  }, [])

  const actionBarVisibility = getOnboardingRoute(['welcome']) !== pathname

  const handleNavigation = async (value?: string) => {
    const isValid = await trigger()
    if (isValid) {
      const path = !value ? chainNavigation[pathname] : value
      navigate(path)
    } else {
      addNotification({
        title: 'Предупреждение',
        paragraph: 'Заполните обязательные поля'
      })
    }
  }

  const handleCreate = async (data: IProfileForm) => {
    const res = await createProfile(data)

    if (res.data)
      addNotification({ title: 'Успех', paragraph: 'Профиль создан' })
  }

  const content = onboardingRoutesContent[pathname]

  return (
    <Form
      methods={methods}
      onSubmit={handleSubmit(handleCreate)}
      className={classNames(cls.onboardingForm, {}, [className])}
    >
      {content && (
        <>
          <Title className={cls.title} as="h1">
            {content.title}
          </Title>
          <Paragraph className={cls.paragraph}>{content.paragraph}</Paragraph>
        </>
      )}

      <RenderRouter
        routeConfig={onboardingRouteConfig}
        firstRenderRoute={getOnboardingRoute(['welcome'])}
        isChildRouter
      />
      {actionBarVisibility && (
        <ActionBar>
          <Select
            className={cls.select}
            selectedValue={pathname}
            onSelect={handleNavigation}
            options={onboardingSelectConfig}
          />
          <Button
            theme={ButtonTheme.OUTLINE}
            onClick={() => handleNavigation()}
          >
            Продолжить
          </Button>
          <Button type="submit">Сохранить</Button>
        </ActionBar>
      )}
    </Form>
  )
})
