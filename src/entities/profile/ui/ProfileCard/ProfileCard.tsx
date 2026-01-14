import cls from './ProfileCard.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { IProfile } from '../../model/types/profileSchema'
import { Icon } from '@/shared/ui/Icon/Icon'
import { Input } from '@/shared/ui/Input/Input'
import { Textarea } from '@/shared/ui/Textarea/Textarea'
import { Block, BlockTheme } from '@/shared/ui/Block/Block'
import { Sizes } from '@/shared/consts/ui'

interface ProfileCardProps {
  className?: string
  profile: IProfile
  isEdit: boolean
}

export const ProfileCard = memo((props: ProfileCardProps) => {
  const { className, profile, isEdit } = props
  const { avatarUrl, firstName, lastName, title, bio } = profile

  const fullName = [firstName, lastName].join(' ')

  return (
    <div className={classNames(cls.profileCard, {}, [className])}>
      <Icon className={cls.icon} size="100px" src={avatarUrl} />

      <div className={cls.info}>
        <Input size={Sizes.XL} readOnly={isEdit} value={fullName} />
        <Input size={Sizes.M} readOnly={isEdit} value={title} />
      </div>

      <Block className={cls.block} theme={BlockTheme.CLEAR} title="About">
        <Textarea value={bio} readOnly={isEdit} />
      </Block>
    </div>
  )
})
