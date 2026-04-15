import cls from './About.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Input, InputTheme } from '@/shared/ui/Input/ui/Input'
import { Textarea } from '@/shared/ui/Textarea/Textarea'
import { Block, BlockTheme } from '@/shared/ui/Block/Block'
import { Sizes } from '@/shared/consts/ui'
import { Controller, useFormContext } from 'react-hook-form'
import { ImageUploader } from '@/shared/ui/Image/ImageUploader/ImageUploader'
import { IProfileForm } from '../../model/types/profileForm'
import UserIcon from '@/shared/assets/icons/User.svg'

interface ProfileCardProps {
  className?: string
  isEdit: boolean
}

const About = memo((props: ProfileCardProps) => {
  const { className, isEdit } = props

  const readOnly = !isEdit

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
            readOnly={readOnly}
          />
        )}
      />

      <div className={cls.fields}>
        <Input
          theme={InputTheme.MINIMAL}
          fontSize={Sizes.XL}
          readOnly={readOnly}
          error={errors.firstName?.message}
          placeholder="Имя"
          {...register('firstName')}
        />
        <Input
          theme={InputTheme.MINIMAL}
          fontSize={Sizes.XL}
          readOnly={readOnly}
          error={errors.lastName?.message}
          placeholder="Фамилия"
          {...register('lastName')}
        />
        <Input
          theme={InputTheme.MINIMAL}
          readOnly={readOnly}
          error={errors.title?.message}
          placeholder="Специальность"
          {...register('title')}
        />
      </div>

      <Block className={cls.block} theme={BlockTheme.CLEAR} title="О себе">
        <Textarea
          readOnly={readOnly}
          error={errors.bio?.message}
          placeholder="Описание"
          {...register('bio')}
        />
      </Block>
    </div>
  )
})

export default About
