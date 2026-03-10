import cls from './ExperienceItem.module.scss'
import { memo } from 'react'
import { Input, InputTheme } from '@/shared/ui/Input/Input'
import { Textarea } from '@/shared/ui/Textarea/Textarea'
import { Block } from '@/shared/ui/Block/Block'
import { Sizes } from '@/shared/consts/ui'
import { useController, useFormContext } from 'react-hook-form'
import { useIsEdit } from '../../../model/selectors/getIsEdit'
import { DatePicker } from '@/shared/ui/DatePicker/DatePicker'
import { IProfileForm } from '../../../model/types/profileForm'

interface ExperienceItemProps {
  index: number
  onRemove?: () => void
}

export const ExperienceItem = memo((props: ExperienceItemProps) => {
  const { index, onRemove } = props

  const isEdit = !useIsEdit()

  const {
    register,
    control,
    formState: { errors }
  } = useFormContext<IProfileForm>()

  const { field: startDate } = useController({
    name: `experience.${index}.startDate`,
    control
  })

  const { field: endDate } = useController({
    name: `experience.${index}.endDate`,
    control
  })

  return (
    <Block
      className={cls.experienceItem}
      handleCross={!isEdit ? onRemove : undefined}
    >
      <Input
        className={cls.position}
        theme={InputTheme.MINIMAL}
        fontSize={Sizes.L}
        readOnly={isEdit}
        error={errors.experience?.[index]?.position?.message}
        placeholder="Должность"
        {...register(`experience.${index}.position`)}
      />
      <Input
        className={cls.company}
        theme={InputTheme.MINIMAL}
        readOnly={isEdit}
        error={errors.experience?.[index]?.company?.message}
        placeholder="Компания"
        {...register(`experience.${index}.company`)}
      />
      <Textarea
        className={cls.description}
        size={Sizes.S}
        readOnly={isEdit}
        error={errors.experience?.[index]?.description?.message}
        placeholder="Описание"
        {...register(`experience.${index}.description`)}
      />
      <DatePicker
        className={cls.period}
        error={errors.experience?.[index]?.startDate?.message}
        mode="range"
        initialView="months"
        value={{
          firstDate: startDate.value ? new Date(startDate.value) : null,
          secondDate: endDate.value ? new Date(endDate.value) : null
        }}
        onSelect={({ firstDate, secondDate }) => {
          startDate.onChange(firstDate)
          endDate.onChange(secondDate)
        }}
        isFutureDateDisabled
        readOnly={isEdit}
      />
    </Block>
  )
})
