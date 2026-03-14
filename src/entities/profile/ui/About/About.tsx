import cls from './About.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Input, InputTheme } from '@/shared/ui/Input/Input'
import { Textarea } from '@/shared/ui/Textarea/Textarea'
import { Block, BlockTheme } from '@/shared/ui/Block/Block'
import { Sizes } from '@/shared/consts/ui'
import { Controller, useFormContext } from 'react-hook-form'
import { useIsEdit } from '../../model/selectors/getIsEdit'
import { ImageUploader } from '@/shared/ui/ImageUploader/ImageUploader'
import { IProfileForm } from '../../model/types/profileForm'
import UserIcon from '@/shared/assets/icons/User.svg'

interface ProfileCardProps {
  className?: string
}

export const About = memo((props: ProfileCardProps) => {
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
            FallbackImage={UserIcon}
            readOnly={isEdit}
          />
        )}
      />

      <div className={cls.fields}>
        <Input
          theme={InputTheme.MINIMAL}
          fontSize={Sizes.XL}
          readOnly={isEdit}
          error={errors.firstName?.message}
          placeholder="Имя"
          {...register('firstName')}
        />
        <Input
          theme={InputTheme.MINIMAL}
          fontSize={Sizes.XL}
          readOnly={isEdit}
          error={errors.lastName?.message}
          placeholder="Фамилия"
          {...register('lastName')}
        />
        <Input
          theme={InputTheme.MINIMAL}
          readOnly={isEdit}
          error={errors.title?.message}
          placeholder="Специальность"
          {...register('title')}
        />
      </div>

      <Block
        wrapperClassName={cls.block}
        theme={BlockTheme.CLEAR}
        title="О себе"
      >
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

export default About
