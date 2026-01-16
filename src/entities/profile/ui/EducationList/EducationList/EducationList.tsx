import cls from './EducationList.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { IProfile } from '../../../model/types/profileSchema'
import { Block, BlockTheme } from '@/shared/ui/Block/Block'
import { EducationItem } from '../EducationItem/EducationItem'
import { useFieldArray, useFormContext } from 'react-hook-form'

interface EducationListProps {
  className?: string
}

export const EducationList = memo((props: EducationListProps) => {
  const { className } = props

  const { control } = useFormContext<IProfile>()

  const { fields } = useFieldArray({ control, name: 'education' })

  return (
    <Block
      className={classNames(cls.educationList, {}, [className])}
      title="Education"
      theme={BlockTheme.CLEAR}
    >
      {fields.map((field, index) => (
        <EducationItem key={field.id} index={index} />
      ))}
    </Block>
  )
})
