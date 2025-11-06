import cls from './NotificationList.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { useNotifications } from '../../model/selectors/getNotifications'
import { NotificationItem } from '../NotificationItem/NotificationItem'
import { Button } from '@/shared/ui/Button/Button'
import { useNotification } from '../../model/hooks/useNotification'

interface NotificationListProps {
  className?: string
}

export const NotificationList = memo((props: NotificationListProps) => {
  const { className } = props

  const notifications = useNotifications()
  const { addNotification } = useNotification()

  return (
    <div className={classNames(cls.notification, {}, [className])}>
      {/*<Button*/}
      {/*  onClick={() =>*/}
      {/*    addNotification({ title: 'Error', paragraph: 'error error error' })*/}
      {/*  }*/}
      {/*>*/}
      {/*  Add*/}
      {/*</Button>*/}
      {notifications.map((notification) => (
        <NotificationItem {...notification} key={notification.id} />
      ))}
    </div>
  )
})
