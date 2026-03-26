import cls from './EducationList.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Block, BlockTheme } from '@/shared/ui/Block/Block'
import { EducationItem } from '../EducationItem/EducationItem'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { EMPTY_EDUCATION } from '../../../model/consts/empty'
import { IProfileForm } from '../../../model/types/profileForm'
import { Paragraph } from '@/shared/ui/Paragraph/Paragraph'
import { FontTheme } from '@/shared/consts/ui'

interface EducationListProps {
  className?: string
  isEdit: boolean
}

const EducationList = memo((props: EducationListProps) => {
  const { className, isEdit } = props

  const { control } = useFormContext<IProfileForm>()

  const { fields, remove, append } = useFieldArray({
    control,
    name: 'education'
  })

  return (
    <Block
      className={classNames(cls.educationList, {}, [className])}
      title="Образование"
      theme={BlockTheme.CLEAR}
      handleAdd={isEdit ? () => append(EMPTY_EDUCATION) : undefined}
    >
      {fields.map((field, index) => (
        <EducationItem
          key={field.id}
          index={index}
          isEdit={isEdit}
          onRemove={() => remove(index)}
        />
      ))}
      {fields.length === 0 && (
        <Paragraph theme={FontTheme.SECONDARY}>Пусто...</Paragraph>
      )}
    </Block>
  )
})

export default EducationList
