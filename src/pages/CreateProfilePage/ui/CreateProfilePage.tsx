import cls from './CreateProfilePage.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Page } from '@/shared/ui/Page/Page'
import { ViewSwitcher } from '@/shared/ui/ViewSwitcher/ViewSwitcher'
import {
  CreateProfileForm,
  createProfileReducer
} from '@/features/create-profile'
import {
  DynamicModuleLoader,
  TReducersList
} from '@/shared/lib/components/DynamicModuleLoader'

const reducers: TReducersList = {
  createProfile: createProfileReducer
}

interface CreateProfilePageProps {
  className?: string
}

const CreateProfilePage = memo((props: CreateProfilePageProps) => {
  const { className } = props

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page
        container
        className={classNames(cls.createProfilePage, {}, [className])}
      >
        <CreateProfileForm />
      </Page>
    </DynamicModuleLoader>
  )
})

export default CreateProfilePage
