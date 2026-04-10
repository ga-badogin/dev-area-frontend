import cls from './ExperienceList.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { ExperienceItem } from '../ExperienceItem/ExperienceItem'
import { Block, BlockTheme } from '@/shared/ui/Block/Block'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { EMPTY_EXPERIENCE } from '../../../model/consts/empty'
import { IProfileForm } from '../../../model/types/profileForm'
import { Paragraph } from '@/shared/ui/Paragraph/Paragraph'
import { FontTheme } from '@/shared/consts/ui'

interface ExperienceProps {
  className?: string
  isEdit: boolean
}

const ExperienceList = memo((props: ExperienceProps) => {
  const { className, isEdit } = props

  const { control } = useFormContext<IProfileForm>()

  const { fields, remove, append } = useFieldArray({
    control,
    name: 'experience'
  })

  return (
    <Block
      className={classNames(cls.experience, {}, [className])}
      title="Опыт"
      theme={BlockTheme.CLEAR}
      handleAdd={isEdit ? () => append(EMPTY_EXPERIENCE) : undefined}
    >
      {fields.map((field, index) => (
        <ExperienceItem
          key={field.id}
          index={index}
          isEdit={isEdit}
          onRemove={() => remove(index)}
          style={{ zIndex: fields.length - index }}
        />
      ))}
      {fields.length === 0 && (
        <Paragraph theme={FontTheme.SECONDARY}>Пусто...</Paragraph>
      )}
    </Block>
  )
})

export default ExperienceList
