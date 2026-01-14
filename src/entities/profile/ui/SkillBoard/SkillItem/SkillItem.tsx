import cls from './SkillItem.module.scss'
import { memo } from 'react'
import { ISkill } from '../../../model/types/profileSchema'
import { Block, BlockTheme } from '@/shared/ui/Block/Block'

interface SkillItemProps {
  item: ISkill
}

export const SkillItem = memo(({ item }: SkillItemProps) => {
  const { name } = item

  return (
    <Block theme={BlockTheme.SMALL} className={cls.skillItem}>
      {name}
    </Block>
  )
})
