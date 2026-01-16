import cls from './SkillItem.module.scss'
import { memo } from 'react'
import { Block, BlockTheme } from '@/shared/ui/Block/Block'
import { useFormContext } from 'react-hook-form'
import { IProfile } from '../../../model/types/profileSchema'
import { Input } from '@/shared/ui/Input/Input'
import { FieldTheme } from '@/shared/consts/ui'
import { useIsEdit } from '../../../model/selectors/getIsEdit'

interface SkillItemProps {
  index: number
}

export const SkillItem = memo((props: SkillItemProps) => {
  const { index } = props

  const isEdit = !useIsEdit()

  const { register } = useFormContext<IProfile>()

  return (
    <Block theme={BlockTheme.SMALL} className={cls.skillItem}>
      <Input
        readOnly={isEdit}
        theme={FieldTheme.MINIMAL}
        {...register(`skill.${index}.name`)}
      />
    </Block>
  )
})
