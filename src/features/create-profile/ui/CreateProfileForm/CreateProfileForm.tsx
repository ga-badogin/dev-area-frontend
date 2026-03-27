import cls from './CreateProfileForm.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { ActionBar } from '@/shared/ui/ActionBar/ActionBar'
import { Select } from '@/shared/ui/Select/Select'
import { createProfileSelectConfig } from '../../lib/createProfileSelectConfig'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { useNotificationThunks } from '@/entities/notification'
import { Form } from '@/shared/ui/Form/Form'
import { Title } from '@/shared/ui/Title/Title'
import { Paragraph } from '@/shared/ui/Paragraph/Paragraph'
import { createProfileRoutesContent } from '../../model/consts/content'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { createProfile } from '../../model/services/createProfile'
import { useIsLoading } from '../../model/selectors/getIsLoading'
import { IProfileForm } from '@/entities/profile'
import { updateProfileFormResolver } from '../../../update-profile'
import { ViewSwitcher } from '@/shared/ui/ViewSwitcher/ViewSwitcher'
import { viewSwitcherConfig } from '../../lib/viewSwitcherConfig'
import { chainNavigation } from '../../model/consts/navigate'

interface CreateProfileFormProps {
  className?: string
}

export const CreateProfileForm = memo((props: CreateProfileFormProps) => {
  const { className } = props

  const [view, setView] = useState<string>('welcome')

  const { addNotification } = useNotificationThunks()
  const dispatch = useAppDispatch()
  const isLoading = useIsLoading()
  const methods = useForm<IProfileForm>({
    mode: 'onSubmit',
    resolver: updateProfileFormResolver
  })

  const { handleSubmit, trigger } = methods
  const content = createProfileRoutesContent[view]

  const handleNavigation = async (value?: string) => {
    const isValid = true
    // await trigger()
    if (isValid) {
      setView((prev) => (!value ? chainNavigation[prev] : value))
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

      <ViewSwitcher
        selectedView={view}
        elements={viewSwitcherConfig({
          onClickWelcome: () => setView('about')
        })}
      />

      {view !== 'welcome' && (
        <ActionBar>
          <Select
            className={cls.select}
            selectedValue={view}
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
