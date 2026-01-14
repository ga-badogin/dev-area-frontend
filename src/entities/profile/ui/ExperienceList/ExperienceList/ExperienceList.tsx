import cls from './ExperienceList.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { List } from '@/shared/ui/List/List'
import { IExperience } from '../../../model/types/profileSchema'
import { ExperienceItem } from '../ExperienceItem/ExperienceItem'
import { Block, BlockTheme } from '@/shared/ui/Block/Block'

interface ExperienceProps {
  className?: string
  experiences: IExperience[]
  isEdit: boolean
}

export const ExperienceList = memo((props: ExperienceProps) => {
  const { className, experiences, isEdit } = props

  return (
    <Block
      className={classNames(cls.experience, {}, [className])}
      title="Experience"
      theme={BlockTheme.CLEAR}
    >
      <List items={experiences} Element={ExperienceItem} />
    </Block>
  )
})
