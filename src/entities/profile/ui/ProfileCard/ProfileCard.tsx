import cls from './ProfileCard.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { IAbout } from '../../model/types/profileApi'
import { Block } from '@/shared/ui/Block/Block'
import { Image } from '@/shared/ui/Image/Image'
import { Paragraph } from '@/shared/ui/Paragraph/Paragraph'
import { Sizes } from '@/shared/consts/ui'
import UserIcon from '@/shared/assets/icons/User.svg'
import { useNavigate } from 'react-router-dom'
import { getAppRoute } from '@/shared/lib/router/getRoute'

interface ProfileCardProps {
  className?: string
  profile: IAbout
}

export const ProfileCard = memo((props: ProfileCardProps) => {
  const { className, profile } = props
  const { avatarUrl, bio, firstName, lastName, title, username } = profile

  const fullName = firstName + ' ' + lastName

  const navigate = useNavigate()

  return (
    <Block
      onClick={() => navigate(getAppRoute(['profile', { username: username }]))}
      className={classNames(cls.profileCard, {}, [className])}
    >
      <Image
        width="150px"
        height="150px"
        value={avatarUrl}
        className={cls.image}
        FallbackImage={UserIcon}
      />
      <div className={cls.wrapper}>
        <Paragraph className={cls.fullName} size={Sizes.L}>
          {fullName}
        </Paragraph>
        <Paragraph className={cls.title}>{title || 'Пусто...'}</Paragraph>
        <Paragraph size={Sizes.S} className={cls.bio}>
          {bio || 'Пусто...'}
        </Paragraph>
      </div>
    </Block>
  )
})
