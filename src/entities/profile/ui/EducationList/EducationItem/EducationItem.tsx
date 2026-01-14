import cls from './EducationItem.module.scss'
import { memo } from 'react'
import { Block } from '@/shared/ui/Block/Block'
import { Input } from '@/shared/ui/Input/Input'
import { IEducation } from '../../../model/types/profileSchema'
import { Sizes } from '@/shared/consts/ui'

interface EducationItemProps {
  item: IEducation
}

export const EducationItem = memo(({ item }: EducationItemProps) => {
  const { speciality, institution } = item

  return (
    <Block className={cls.educationItem}>
      <Input size={Sizes.L} readOnly={true} value={speciality} />
      <Input size={Sizes.M} readOnly={true} value={institution} />
    </Block>
  )
})
