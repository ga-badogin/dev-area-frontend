import cls from './NotificationList.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import {
  useNotifications,
  useNotificationThunks
} from '@/entities/notification'
import { NotificationItem } from '../NotificationItem/NotificationItem'
import { Button } from '@/shared/ui/Button/Button'

interface NotificationListProps {
  className?: string
}

export const NotificationList = memo((props: NotificationListProps) => {
  const { className } = props

  const notifications = useNotifications()
  const { addNotification } = useNotificationThunks()

  return (
    <div className={classNames(cls.notification, {}, [className])}>
      {/*<Button*/}
      {/*  onClick={() =>*/}
      {/*    addNotification({*/}
      {/*      title: 'Успех',*/}
      {/*      paragraph: 'Вы успешно авторизовались'*/}
      {/*    })*/}
      {/*  }*/}
      {/*>*/}
      {/*  Add*/}
      {/*</Button>*/}
      {notifications.map((notification) => (
        <NotificationItem notification={notification} key={notification.id} />
      ))}
    </div>
  )
})
