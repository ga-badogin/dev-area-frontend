import cls from './SkillBoard.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Block } from '@/shared/ui/Block/Block'
import { IProfile } from '../../../model/types/profileSchema'
import { SkillItem } from '../SkillItem/SkillItem'
import { useFieldArray, useFormContext } from 'react-hook-form'

interface SkillBoardProps {
  className?: string
}

export const SkillBoard = memo((props: SkillBoardProps) => {
  const { className } = props

  const { control } = useFormContext<IProfile>()

  const { fields } = useFieldArray({ control, name: 'skill' })

  return (
    <Block
      className={classNames(cls.skillBoard, {}, [className])}
      title="Skills"
    >
      {fields.map((field, index) => (
        <SkillItem key={field.id} index={index} />
      ))}
    </Block>
  )
})
