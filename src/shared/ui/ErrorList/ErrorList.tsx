import cls from './ErrorList.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { Text, TextTheme } from '../Text/Text'
import { Sizes } from '@/shared/consts/ui'

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
          <Text theme={TextTheme.ERROR} paragraph={error} size={Sizes.S} />
        </li>
      ))}
    </ul>
  ) : undefined
})
