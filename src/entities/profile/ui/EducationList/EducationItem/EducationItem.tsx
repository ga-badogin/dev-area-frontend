import cls from './EducationItem.module.scss'
import { memo } from 'react'
import { Block } from '@/shared/ui/Block/Block'
import { Input } from '@/shared/ui/Input/Input'
import { IProfileForm } from '../../../model/types/profileApi'
import { FieldTheme, Sizes } from '@/shared/consts/ui'
import { useFormContext } from 'react-hook-form'
import { useIsEdit } from '../../../model/selectors/getIsEdit'

interface EducationItemProps {
  index: number
}

export const EducationItem = memo((props: EducationItemProps) => {
  const { index } = props

  const isEdit = !useIsEdit()

  const {
    register,
    formState: { errors }
  } = useFormContext<IProfileForm>()

  return (
    <Block className={cls.educationItem}>
      <Input
        theme={FieldTheme.MINIMAL}
        size={Sizes.L}
        readOnly={isEdit}
        error={errors.education?.[index]?.speciality?.message}
        {...register(`education.${index}.speciality`)}
      />
      <Input
        theme={FieldTheme.MINIMAL}
        size={Sizes.M}
        readOnly={isEdit}
        error={errors.education?.[index]?.institution?.message}
        {...register(`education.${index}.institution`)}
      />
    </Block>
  )
})
