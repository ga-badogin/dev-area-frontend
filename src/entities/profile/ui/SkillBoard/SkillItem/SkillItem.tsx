import cls from './SkillItem.module.scss'
import { memo } from 'react'
import { Block, BlockTheme } from '@/shared/ui/Block/Block'
import { useFormContext } from 'react-hook-form'
import { Input } from '@/shared/ui/Input/ui/Input'
import { IProfileForm } from '../../../model/types/profileForm'
import { FieldTheme } from '@/shared/types/style'

interface SkillItemProps {
  index: number
  onRemove?: () => void
  isEdit: boolean
}

export const SkillItem = memo((props: SkillItemProps) => {
  const { index, onRemove, isEdit } = props

  const {
    register,
    formState: { errors }
  } = useFormContext<IProfileForm>()

  return (
    <Block
      theme={BlockTheme.FIT}
      handleCross={isEdit ? onRemove : undefined}
      className={cls.skillItem}
    >
      <Input
        readOnly={!isEdit}
        theme={FieldTheme.MINIMAL}
        className={cls.input}
        placeholder="Навык"
        isDynamic
        isError={Boolean(errors.skill?.[index]?.name?.message)}
        {...register(`skill.${index}.name`)}
      />
    </Block>
  )
})
