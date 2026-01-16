import cls from './ProfilePage.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Page } from '@/shared/ui/Page/Page'
import {
  DynamicModuleLoader,
  TReducersList
} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { profileReducer } from '@/entities/profile'
import { ProfileForm } from '@/widgets/profile-form'

const reducers: TReducersList = {
  profile: profileReducer
}

interface ProfilePageProps {
  className?: string
}

const ProfilePage = memo((props: ProfilePageProps) => {
  const { className } = props

  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page className={classNames(cls.profilePage, {}, [className])}>
        <ProfileForm />
      </Page>
    </DynamicModuleLoader>
  )
})

export default ProfilePage
