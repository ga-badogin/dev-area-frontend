import cls from './ExperienceItem.module.scss'
import { memo } from 'react'
import { IProfile } from '../../../model/types/profileSchema'
import { Input } from '@/shared/ui/Input/Input'
import { Textarea } from '@/shared/ui/Textarea/Textarea'
import { Block } from '@/shared/ui/Block/Block'
import { FieldTheme, Sizes } from '@/shared/consts/ui'
import { useFormContext } from 'react-hook-form'
import { useIsEdit } from '../../../model/selectors/getIsEdit'

interface ExperienceItemProps {
  index: number
  onRemove?: () => void
}

export const ExperienceItem = memo((props: ExperienceItemProps) => {
  const { index, onRemove } = props

  const isEdit = !useIsEdit()

  const {
    register,
    formState: { errors }
  } = useFormContext<IProfile>()

  return (
    <Block
      className={cls.experienceItem}
      handleCross={!isEdit ? onRemove : undefined}
    >
      <Input
        theme={FieldTheme.MINIMAL}
        size={Sizes.L}
        readOnly={isEdit}
        error={errors.experience?.[index]?.position?.message}
        {...register(`experience.${index}.position`)}
      />
      <Input
        theme={FieldTheme.MINIMAL}
        size={Sizes.M}
        readOnly={isEdit}
        error={errors.experience?.[index]?.company?.message}
        {...register(`experience.${index}.company`)}
      />
      <Textarea
        size={Sizes.S}
        readOnly={isEdit}
        {...register(`experience.${index}.description`)}
      />
    </Block>
  )
})
