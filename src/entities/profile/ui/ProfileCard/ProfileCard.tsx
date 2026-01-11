import cls from './ProfileCard.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { IProfile } from '../../model/types/profileSchema'
import { Text } from '@/shared/ui/Text/Text'
import { Icon } from '@/shared/ui/Icon/Icon'

interface ProfileCardProps {
  className?: string
  profile: IProfile
}

export const ProfileCard = memo((props: ProfileCardProps) => {
  const { className, profile } = props
  const { avatarUrl, firstName, lastName, title, bio } = profile

  const fullName = [firstName, lastName].join(' ')

  return (
    <div className={classNames(cls.profileCard, {}, [className])}>
      <Icon src={avatarUrl} />
      <Text title={fullName} paragraph={title} />

      <Text paragraph={bio} />
    </div>
  )
})
