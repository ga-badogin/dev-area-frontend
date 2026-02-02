import cls from './ProfileCard.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { IAbout } from '../../model/types/profileApi'
import { Block } from '@/shared/ui/Block/Block'
import { Image } from '@/shared/ui/Image/Image'
import { Paragraph } from '@/shared/ui/Paragraph/Paragraph'

interface ProfileCardProps {
  className?: string
  profile: IAbout
}

export const ProfileCard = memo((props: ProfileCardProps) => {
  const { className, profile } = props
  const { avatarUrl, bio, firstName, lastName, title } = profile

  const fullName = firstName + ' ' + lastName

  return (
    <Block className={classNames(cls.profileCard, {}, [className])}>
      <Image
        width="150px"
        height="150px"
        value={avatarUrl}
        className={cls.image}
      />
      <div className={cls.wrapper}>
        <Paragraph>{fullName}</Paragraph>
        <Paragraph>{title}</Paragraph>
      </div>
      <Paragraph className={cls.bio}>{bio}</Paragraph>
    </Block>
  )
})
