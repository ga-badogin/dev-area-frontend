import cls from './ErrorItem.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Paragraph } from '../../Paragraph/Paragraph'
import { Sizes } from '@/shared/consts/ui'
import { ValidateResult } from 'react-hook-form'

interface ErrorItemProps {
  className?: string
  error: string | ValidateResult
}

export const ErrorItem = memo((props: ErrorItemProps) => {
  const { className, error } = props

  return (
    <li className={classNames(cls.errorItem, {}, [className])}>
      <Paragraph className={cls.paragraph} size={Sizes.S}>
        {error}
      </Paragraph>
    </li>
  )
})
