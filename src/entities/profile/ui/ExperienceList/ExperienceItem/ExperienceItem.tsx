import cls from './ExperienceItem.module.scss'
import { CSSProperties, memo } from 'react'
import { Input } from '@/shared/ui/Input/ui/Input'
import { Textarea } from '@/shared/ui/Textarea/Textarea'
import { Block } from '@/shared/ui/Block/Block'
import { Sizes } from '@/shared/consts/ui'
import { useController, useFormContext } from 'react-hook-form'
import { DatePicker } from '@/shared/ui/DatePicker/DatePicker'
import { IProfileForm } from '../../../model/types/profileForm'
import { FieldTheme } from '@/shared/types/style'

interface ExperienceItemProps {
  index: number
  onRemove?: () => void
  isEdit: boolean
  style?: CSSProperties
}

export const ExperienceItem = memo((props: ExperienceItemProps) => {
  const { index, onRemove, isEdit, style } = props

  const readOnly = !isEdit

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
      handleCross={isEdit ? onRemove : undefined}
      style={style}
    >
      <Input
        className={cls.position}
        theme={FieldTheme.MINIMAL}
        fontSize={Sizes.L}
        readOnly={readOnly}
        error={errors.experience?.[index]?.position}
        placeholder="Должность"
        {...register(`experience.${index}.position`)}
      />
      <Input
        className={cls.company}
        theme={FieldTheme.MINIMAL}
        readOnly={readOnly}
        error={errors.experience?.[index]?.company}
        placeholder="Компания"
        {...register(`experience.${index}.company`)}
      />
      <Textarea
        className={cls.description}
        fontSize={Sizes.S}
        readOnly={readOnly}
        error={errors.experience?.[index]?.description}
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
        readOnly={readOnly}
      />
    </Block>
  )
})
