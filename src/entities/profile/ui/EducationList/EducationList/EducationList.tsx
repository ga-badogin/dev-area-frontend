import cls from './EducationList.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { IProfileForm } from '../../../model/types/profileApi'
import { Block, BlockTheme } from '@/shared/ui/Block/Block'
import { EducationItem } from '../EducationItem/EducationItem'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { EMPTY_EDUCATION } from '../../../model/consts/empty'

interface EducationListProps {
  className?: string
}

export const EducationList = memo((props: EducationListProps) => {
  const { className } = props

  const { control } = useFormContext<IProfileForm>()

  const { fields, remove, append } = useFieldArray({
    control,
    name: 'education'
  })

  return (
    <Block
      className={classNames(cls.educationList, {}, [className])}
      title="Education"
      theme={BlockTheme.CLEAR}
      handleAdd={() => append(EMPTY_EDUCATION)}
    >
      {fields.map((field, index) => (
        <EducationItem
          key={field.id}
          index={index}
          onRemove={() => remove(index)}
        />
      ))}
    </Block>
  )
})
