import cls from './CreateProfileForm.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { useForm } from 'react-hook-form'
import { RenderRouter } from '@/app/providers/router/exclude'
import { ActionBar } from '@/shared/ui/ActionBar/ActionBar'
import { Select } from '@/shared/ui/Select/Select'
import { createProfileSelectConfig } from '../../lib/createProfileSelectConfig'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { chainNavigation } from '../../model/consts/navigate'
import { useNotificationThunks } from '@/entities/notification'
import { Form } from '@/shared/ui/Form/Form'
import { Title } from '@/shared/ui/Title/Title'
import { Paragraph } from '@/shared/ui/Paragraph/Paragraph'
import { createProfileRoutesContent } from '../../model/consts/content'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { createProfile } from '../../model/services/createProfile'
import { useIsLoading } from '../../model/selectors/getIsLoading'
import { IProfileForm } from '@/entities/profile'
import { createProfileRouteConfig } from '../../lib/createProfileRouteConfig'
import { updateProfileFormResolver } from '../../../update-profile'
import { getCreateProfileRoute } from '@/shared/lib/router/getRoute'

interface CreateProfileFormProps {
  className?: string
}

export const CreateProfileForm = memo((props: CreateProfileFormProps) => {
  const { className } = props

  const { pathname } = useLocation()
  const navigate = useNavigate()
  const { addNotification } = useNotificationThunks()
  const dispatch = useAppDispatch()
  const isLoading = useIsLoading()
  const methods = useForm<IProfileForm>({
    mode: 'onSubmit',
    resolver: updateProfileFormResolver
  })

  const { handleSubmit, trigger } = methods
  const actionBarVisibility = getCreateProfileRoute(['welcome']) !== pathname
  const content = createProfileRoutesContent[pathname]

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

  return (
    <Form
      methods={methods}
      onSubmit={handleSubmit((profile) => dispatch(createProfile(profile)))}
      className={classNames(cls.createProfileForm, {}, [className])}
    >
      {content && (
        <>
          <Title className={cls.title} as="h1">
            {content.title}
          </Title>
          <Paragraph className={cls.paragraph}>{content.paragraph}</Paragraph>
        </>
      )}

      <RenderRouter routeConfig={createProfileRouteConfig} isChildRouter />
      {actionBarVisibility && (
        <ActionBar>
          <Select
            className={cls.select}
            selectedValue={pathname}
            onSelect={handleNavigation}
            options={createProfileSelectConfig}
          />
          <Button
            theme={ButtonTheme.OUTLINE}
            onClick={() => handleNavigation()}
          >
            Продолжить
          </Button>
          <Button isLoading={isLoading} type="submit">
            Сохранить
          </Button>
        </ActionBar>
      )}
    </Form>
  )
})
