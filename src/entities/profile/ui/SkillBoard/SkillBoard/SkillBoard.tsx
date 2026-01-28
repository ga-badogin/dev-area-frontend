import cls from './SkillBoard.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Block } from '@/shared/ui/Block/Block'
import { IProfileForm } from '../../../model/types/profileApi'
import { SkillItem } from '../SkillItem/SkillItem'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { EMPTY_SKILL } from '../../../model/consts/empty'

interface SkillBoardProps {
  className?: string
}

export const SkillBoard = memo((props: SkillBoardProps) => {
  const { className } = props

  const { control } = useFormContext<IProfileForm>()

  const { fields, remove, append } = useFieldArray({ control, name: 'skill' })

  return (
    <Block
      className={classNames(cls.skillBoard, {}, [className])}
      title="Навыки"
      handleAdd={() => append(EMPTY_SKILL)}
    >
      {fields.map((field, index) => (
        <SkillItem
          key={field.id}
          index={index}
          onRemove={() => remove(index)}
        />
      ))}
    </Block>
  )
})
