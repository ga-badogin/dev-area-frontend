import cls from './Notification.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'

interface NotificationProps {
  className?: string
}

export const Notification = memo((props: NotificationProps) => {
  const { className } = props

  return <div className={classNames(cls.notification, {}, [className])}></div>
})
