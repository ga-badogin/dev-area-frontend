import cls from './ProfilePage.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Page } from '@/shared/ui/Page/Page'
import {
  DynamicModuleLoader,
  TReducersList
} from '@/shared/lib/components/DynamicModuleLoader'
import {
  UpdateProfileForm,
  updateProfileReducer
} from '@/features/update-profile'

const reducers: TReducersList = {
  updateProfile: updateProfileReducer
}

interface ProfilePageProps {
  className?: string
}

const ProfilePage = memo((props: ProfilePageProps) => {
  const { className } = props

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page container className={classNames(cls.profilePage, {}, [className])}>
        <UpdateProfileForm />
      </Page>
    </DynamicModuleLoader>
  )
})

export default ProfilePage
