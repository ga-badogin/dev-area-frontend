import cls from './ProfilePage.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { Page } from '@/shared/ui/Page/Page'
import { ProfileCard, useGetProfile } from '@/entities/profile'

interface ProfilePageProps {
  className?: string
}

const ProfilePage = memo((props: ProfilePageProps) => {
  const { className } = props
  const { username } = useParams()

  const { data: profile } = useGetProfile(username)

  return profile ? (
    <Page className={classNames(cls.profilePage, {}, [className])}>
      <ProfileCard profile={profile} />
    </Page>
  ) : undefined
})

export default ProfilePage
