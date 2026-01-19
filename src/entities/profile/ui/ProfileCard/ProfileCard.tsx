import cls from './ProfileCard.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { IProfile, IProfileForm } from '../../model/types/profileApi'
import { Icon } from '@/shared/ui/Icon/Icon'
import { Input } from '@/shared/ui/Input/Input'
import { Textarea } from '@/shared/ui/Textarea/Textarea'
import { Block, BlockTheme } from '@/shared/ui/Block/Block'
import { FieldTheme, Sizes } from '@/shared/consts/ui'
import { useFormContext } from 'react-hook-form'
import { useIsEdit } from '../../model/selectors/getIsEdit'

interface ProfileCardProps {
  className?: string
  profile: IProfile
}

export const ProfileCard = memo((props: ProfileCardProps) => {
  const { className, profile } = props

  const isEdit = !useIsEdit()

  const {
    register,
    formState: { errors }
  } = useFormContext<IProfileForm>()

  return (
    <div className={classNames(cls.profileCard, {}, [className])}>
      <Icon className={cls.icon} size="100px" src={profile.avatarUrl} />

      <div className={cls.info}>
        <Input
          theme={FieldTheme.MINIMAL}
          size={Sizes.XL}
          readOnly={isEdit}
          error={errors.firstName?.message}
          {...register('firstName')}
        />
        <Input
          theme={FieldTheme.MINIMAL}
          size={Sizes.XL}
          readOnly={isEdit}
          error={errors.lastName?.message}
          {...register('lastName')}
        />
        <Input
          theme={FieldTheme.MINIMAL}
          size={Sizes.M}
          readOnly={isEdit}
          error={errors.title?.message}
          {...register('title')}
        />
      </div>

      <Block className={cls.block} theme={BlockTheme.CLEAR} title="About">
        <Textarea readOnly={isEdit} {...register('bio')} />
      </Block>
    </div>
  )
})
