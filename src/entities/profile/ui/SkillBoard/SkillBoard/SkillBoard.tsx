import cls from './SkillBoard.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Block } from '@/shared/ui/Block/Block'
import { SkillItem } from '../SkillItem/SkillItem'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { EMPTY_SKILL } from '../../../model/consts/empty'
import { IProfileForm } from '../../../model/types/profileForm'
import { Paragraph } from '@/shared/ui/Paragraph/Paragraph'
import { FontTheme } from '@/shared/consts/ui'

interface SkillBoardProps {
  className?: string
  isEdit: boolean
}

const SkillBoard = memo((props: SkillBoardProps) => {
  const { className, isEdit } = props

  const { control } = useFormContext<IProfileForm>()

  const { fields, remove, append } = useFieldArray({ control, name: 'skill' })

  return (
    <Block
      className={classNames(cls.skillBoard, {}, [className])}
      title="Навыки"
      handleAdd={isEdit ? () => append(EMPTY_SKILL) : undefined}
    >
      {fields.map((field, index) => (
        <SkillItem
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

export default SkillBoard
