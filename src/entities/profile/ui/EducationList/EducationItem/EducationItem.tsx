import cls from './EducationItem.module.scss'
import { memo } from 'react'
import { Block } from '@/shared/ui/Block/Block'
import { Input } from '@/shared/ui/Input/Input'
import { IProfileForm } from '../../../model/types/profileApi'
import { FieldTheme, Sizes } from '@/shared/consts/ui'
import { Controller, useFormContext } from 'react-hook-form'
import { useIsEdit } from '../../../model/selectors/getIsEdit'
import { DatePicker } from '@/shared/ui/DatePicker/DatePicker'

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
      <Controller
        name={`education.${index}.period`}
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
            readOnly={isEdit}
            onSelect={onSelect}
            isFutureDateDisabled
          />
        )}
      />
    </Block>
  )
})
