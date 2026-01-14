import cls from './ProfilePage.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { useParams } from 'react-router-dom'
import { Page } from '@/shared/ui/Page/Page'
import {
  EducationList,
  ExperienceList,
  ProfileCard,
  SkillBoard,
  useGetProfile,
  useIsEdit
} from '@/entities/profile'

interface ProfilePageProps {
  className?: string
}

const ProfilePage = memo((props: ProfilePageProps) => {
  const { className } = props
  const { username } = useParams()
  const isEdit = !useIsEdit()

  const { data: profile } = useGetProfile(username)

  return profile ? (
    <Page className={classNames(cls.profilePage, {}, [className])}>
      <ProfileCard isEdit={isEdit} profile={profile} />
      <ExperienceList isEdit={isEdit} experiences={profile.experience} />
      <EducationList isEdit={isEdit} educations={profile.education} />
      <SkillBoard isEdit={isEdit} skills={profile.skill} />
    </Page>
  ) : undefined
})

export default ProfilePage
