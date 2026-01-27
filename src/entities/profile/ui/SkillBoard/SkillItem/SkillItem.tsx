import cls from './SkillItem.module.scss'
import { memo } from 'react'
import { Block, BlockTheme } from '@/shared/ui/Block/Block'
import { useFormContext } from 'react-hook-form'
import { Input } from '@/shared/ui/Input/Input'
import { FieldTheme } from '@/shared/consts/ui'
import { useIsEdit } from '../../../model/selectors/getIsEdit'
import { IProfileForm } from '../../../model/types/profileApi'

interface SkillItemProps {
  index: number
  onRemove?: () => void
}

export const SkillItem = memo((props: SkillItemProps) => {
  const { index, onRemove } = props

  const isEdit = !useIsEdit()

  const { register } = useFormContext<IProfileForm>()

  return (
    <Block
      theme={BlockTheme.SMALL}
      handleCross={!isEdit ? onRemove : undefined}
      className={cls.skillItem}
    >
      <Input
        readOnly={isEdit}
        theme={FieldTheme.MINIMAL}
        className={cls.input}
        {...register(`skill.${index}.name`)}
      />
    </Block>
  )
})
