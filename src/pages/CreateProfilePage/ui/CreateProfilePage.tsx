import cls from './CreateProfilePage.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Page } from '@/shared/ui/Page/Page'
import {
  DynamicModuleLoader,
  TReducersList
} from '@/shared/lib/components/DynamicModuleLoader'
import {
  CreateProfileForm,
  createProfileReducer
} from '@/features/create-profile'

const reducers: TReducersList = {
  createProfile: createProfileReducer
}

interface CreateProfilePageProps {
  className?: string
}

export const CreateProfilePage = memo((props: CreateProfilePageProps) => {
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
