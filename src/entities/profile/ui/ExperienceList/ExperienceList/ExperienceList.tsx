import cls from './ExperienceList.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { IProfileForm } from '../../../model/types/profileApi'
import { ExperienceItem } from '../ExperienceItem/ExperienceItem'
import { Block, BlockTheme } from '@/shared/ui/Block/Block'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { EMPTY_EXPERIENCE } from '../../../model/consts/empty'
import { useIsEdit } from '../../../model/selectors/getIsEdit'

interface ExperienceProps {
  className?: string
}

export const ExperienceList = memo((props: ExperienceProps) => {
  const { className } = props

  const isEdit = useIsEdit()

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
          onRemove={() => remove(index)}
        />
      ))}
    </Block>
  )
})
