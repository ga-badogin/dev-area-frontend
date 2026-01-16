import cls from './ExperienceList.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { IProfile } from '../../../model/types/profileSchema'
import { ExperienceItem } from '../ExperienceItem/ExperienceItem'
import { Block, BlockTheme } from '@/shared/ui/Block/Block'
import { useFieldArray, useFormContext } from 'react-hook-form'

interface ExperienceProps {
  className?: string
}

export const ExperienceList = memo((props: ExperienceProps) => {
  const { className } = props

  const { control } = useFormContext<IProfile>()

  const { fields, remove } = useFieldArray({
    control,
    name: 'experience'
  })

  return (
    <Block
      className={classNames(cls.experience, {}, [className])}
      title="Experience"
      theme={BlockTheme.CLEAR}
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
