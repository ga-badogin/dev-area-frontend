import cls from './ExperienceItem.module.scss'
import { memo } from 'react'
import { IProfileForm } from '../../../model/types/profileApi'
import { Input } from '@/shared/ui/Input/Input'
import { Textarea } from '@/shared/ui/Textarea/Textarea'
import { Block } from '@/shared/ui/Block/Block'
import { FieldTheme, Sizes } from '@/shared/consts/ui'
import { Controller, useFormContext } from 'react-hook-form'
import { useIsEdit } from '../../../model/selectors/getIsEdit'
import { DatePicker } from '@/shared/ui/DatePicker/DatePicker'

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

  return (
    <Block
      className={cls.experienceItem}
      handleCross={!isEdit ? onRemove : undefined}
    >
      <Input
        className={cls.position}
        theme={FieldTheme.MINIMAL}
        size={Sizes.L}
        readOnly={isEdit}
        error={errors.experience?.[index]?.position?.message}
        placeholder="Должность"
        {...register(`experience.${index}.position`)}
      />
      <Input
        className={cls.company}
        theme={FieldTheme.MINIMAL}
        size={Sizes.M}
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
      <Controller
        name={`experience.${index}.period`}
        control={control}
        render={({
          field: {
            value: { firstDate, secondDate },
            onChange: onSelect
          }
        }) => (
          <DatePicker
            className={cls.period}
            mode="range"
            initialView="months"
            value={{
              firstDate: firstDate ? new Date(firstDate) : null,
              secondDate: secondDate ? new Date(secondDate) : null
            }}
            onSelect={onSelect}
            isFutureDateDisabled
            readOnly={isEdit}
          />
        )}
      />
    </Block>
  )
})
