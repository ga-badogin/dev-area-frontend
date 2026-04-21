import cls from './ErrorList.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { FieldError } from 'react-hook-form'
import { ErrorItem } from './ErrorItem/ErrorItem'

interface ErrorListProps {
  className?: string
  error?: FieldError
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
      {error.types ? (
        Object.values(error.types).map((error, index) => (
          <ErrorItem error={error} key={index} />
        ))
      ) : (
        <ErrorItem error={error.message} />
      )}
    </ul>
  ) : undefined
})
