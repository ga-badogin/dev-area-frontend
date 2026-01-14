import cls from './SkillBoard.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Block } from '@/shared/ui/Block/Block'
import { List } from '@/shared/ui/List/List'
import { ISkill } from '../../../model/types/profileSchema'
import { SkillItem } from '../SkillItem/SkillItem'

interface SkillBoardProps {
  className?: string
  skills: ISkill[]
  isEdit: boolean
}

export const SkillBoard = memo((props: SkillBoardProps) => {
  const { className, skills, isEdit } = props

  return (
    <Block
      className={classNames(cls.skillBoard, {}, [className])}
      title="Skills"
    >
      <List items={skills} Element={SkillItem} />
    </Block>
  )
})
