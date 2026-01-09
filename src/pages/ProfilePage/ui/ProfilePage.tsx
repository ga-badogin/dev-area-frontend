import cls from './ProfilePage.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { useParams } from 'react-router-dom'

interface ProfilePageProps {
  className?: string
}

const ProfilePage = memo((props: ProfilePageProps) => {
  const { className } = props
  const { username } = useParams()

  return (
    <div className={classNames(cls.profilePage, {}, [className])}>
      {username}
    </div>
  )
})

export default ProfilePage
