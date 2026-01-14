import cls from './ExperienceItem.module.scss'
import { memo } from 'react'
import { IExperience } from '../../../model/types/profileSchema'
import { Input } from '@/shared/ui/Input/Input'
import { Textarea } from '@/shared/ui/Textarea/Textarea'
import { Block } from '@/shared/ui/Block/Block'
import { Sizes } from '@/shared/consts/ui'

interface ExperienceItemProps {
  item: IExperience
}

export const ExperienceItem = memo(({ item }: ExperienceItemProps) => {
  const { company, position, description } = item

  return (
    <Block className={cls.experienceItem}>
      <Input size={Sizes.L} readOnly={true} value={position} />
      <Input size={Sizes.M} readOnly={true} value={company} />

      <Textarea size={Sizes.S} readOnly={true} value={description} />
    </Block>
  )
})
