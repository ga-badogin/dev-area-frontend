import cls from './ProfileCard.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Input } from '@/shared/ui/Input/Input'
import { Textarea } from '@/shared/ui/Textarea/Textarea'
import { Block, BlockTheme } from '@/shared/ui/Block/Block'
import { FieldTheme, Sizes } from '@/shared/consts/ui'
import { Controller, useFormContext } from 'react-hook-form'
import { useIsEdit } from '../../model/selectors/getIsEdit'
import { ImageUploader } from '@/shared/ui/ImageUploader/ImageUploader'
import { IProfileForm } from '../../model/types/profileForm'

interface ProfileCardProps {
  className?: string
}

export const ProfileCard = memo((props: ProfileCardProps) => {
  const { className } = props

  const isEdit = !useIsEdit()

  const {
    register,
    control,
    formState: { errors }
  } = useFormContext<IProfileForm>()

  return (
    <div className={classNames(cls.profileCard, {}, [className])}>
      <Controller
        name="avatarUrl"
        control={control}
        render={({ field }) => (
          <ImageUploader
            value={field.value}
            onChange={field.onChange}
            className={cls.icon}
          />
        )}
      />

      <div className={cls.info}>
        <Input
          theme={FieldTheme.MINIMAL}
          size={Sizes.XL}
          readOnly={isEdit}
          error={errors.firstName?.message}
          placeholder="Имя"
          {...register('firstName')}
        />
        <Input
          theme={FieldTheme.MINIMAL}
          size={Sizes.XL}
          readOnly={isEdit}
          error={errors.lastName?.message}
          placeholder="Фамилия"
          {...register('lastName')}
        />
        <Input
          theme={FieldTheme.MINIMAL}
          size={Sizes.M}
          readOnly={isEdit}
          error={errors.title?.message}
          placeholder="Специальность"
          {...register('title')}
        />
      </div>

      <Block className={cls.block} theme={BlockTheme.CLEAR} title="О себе">
        <Textarea
          readOnly={isEdit}
          error={errors.bio?.message}
          placeholder="Описание"
          {...register('bio')}
        />
      </Block>
    </div>
  )
})
