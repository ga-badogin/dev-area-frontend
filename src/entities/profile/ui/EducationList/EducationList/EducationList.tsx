import cls from './EducationList.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { IEducation } from '../../../model/types/profileSchema'
import { Block, BlockTheme } from '@/shared/ui/Block/Block'
import { List } from '@/shared/ui/List/List'
import { EducationItem } from '../EducationItem/EducationItem'

interface EducationListProps {
  className?: string
  educations: IEducation[]
  isEdit: boolean
}

export const EducationList = memo((props: EducationListProps) => {
  const { className, educations, isEdit } = props

  return (
    <Block
      className={classNames(cls.educationList, {}, [className])}
      title="Education"
      theme={BlockTheme.CLEAR}
    >
      <List items={educations} Element={EducationItem} />
    </Block>
  )
})
