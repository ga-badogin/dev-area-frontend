import cls from './ErrorList.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Sizes } from '@/shared/consts/ui'
import { Paragraph } from '../Paragraph/Paragraph'

interface ErrorListProps {
  className?: string
  error?: string
  isActive?: boolean
}

export const ErrorList = memo((props: ErrorListProps) => {
  const { className, error, isActive = true } = props

  return error && isActive ? (
    <ul
      className={classNames(cls.errorList, { [cls.isActive]: isActive }, [
        className
      ])}
    >
      {error.split('/').map((error, index) => (
        <li className={cls.listItem} key={index}>
          <Paragraph className={cls.paragraph} size={Sizes.S}>
            {error}
          </Paragraph>
        </li>
      ))}
    </ul>
  ) : undefined
})
