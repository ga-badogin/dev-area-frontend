import cls from './EducationItem.module.scss'
import { memo } from 'react'
import { Block } from '@/shared/ui/Block/Block'
import { Input } from '@/shared/ui/Input/Input'
import { FieldTheme, Sizes } from '@/shared/consts/ui'
import { useController, useFormContext } from 'react-hook-form'
import { useIsEdit } from '../../../model/selectors/getIsEdit'
import { DatePicker } from '@/shared/ui/DatePicker/DatePicker'
import { IProfileForm } from '../../../model/types/profileForm'

interface EducationItemProps {
  index: number
  onRemove?: () => void
}

export const EducationItem = memo((props: EducationItemProps) => {
  const { index, onRemove } = props

  const isEdit = !useIsEdit()

  const {
    register,
    control,
    formState: { errors }
  } = useFormContext<IProfileForm>()

  const { field: startDate } = useController({
    name: `education.${index}.startDate`,
    control
  })

  const { field: endDate } = useController({
    name: `education.${index}.endDate`,
    control
  })

  return (
    <Block
      className={cls.educationItem}
      handleCross={!isEdit ? onRemove : undefined}
    >
      <Input
        className={cls.speciality}
        theme={FieldTheme.MINIMAL}
        size={Sizes.L}
        readOnly={isEdit}
        error={errors.education?.[index]?.speciality?.message}
        placeholder="Специальность"
        {...register(`education.${index}.speciality`)}
      />
      <Input
        className={cls.institution}
        theme={FieldTheme.MINIMAL}
        size={Sizes.M}
        readOnly={isEdit}
        error={errors.education?.[index]?.institution?.message}
        placeholder="Учебное заведение"
        {...register(`education.${index}.institution`)}
      />
      <DatePicker
        className={cls.period}
        error={errors.education?.[index]?.startDate?.message}
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
