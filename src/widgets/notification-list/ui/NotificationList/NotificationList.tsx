import cls from './NotificationList.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { useNotifications } from '@/entities/notification'
import { NotificationItem } from '../NotificationItem/NotificationItem'
import { Button } from '@/shared/ui/Button/Button'

interface NotificationListProps {
  className?: string
}

export const NotificationList = memo((props: NotificationListProps) => {
  const { className } = props

  const notifications = useNotifications()

  return (
    <div className={classNames(cls.notification, {}, [className])}>
      {notifications.map((notification) => (
        <NotificationItem notification={notification} key={notification.id} />
      ))}
    </div>
  )
})
