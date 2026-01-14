import cls from './NotificationItem.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { INotification, useNotificationThunks } from '@/entities/notification'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import CrossIcon from '@/shared/assets/icons/Cross.svg'
import { Title } from '@/shared/ui/Title/Title'
import { Paragraph } from '@/shared/ui/Paragraph/Paragraph'
import { Sizes } from '@/shared/consts/ui'

interface NotificationItemProps extends INotification {
  className?: string
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const { className, paragraph, title, deleted, id } = props

  const { deleteNotification } = useNotificationThunks()

  return (
    <div
      className={classNames(
        cls.notificationItemWrapper,
        { [cls.deleted]: deleted },
        [className]
      )}
    >
      <div className={cls.notificationItem}>
        <Title as="h2" />
        <Paragraph size={Sizes.S} />
        <Button
          theme={ButtonTheme.CLEAR}
          className={cls.deleteBtn}
          onClick={() => deleteNotification(id)}
        >
          <CrossIcon className={cls.cross} />
        </Button>
      </div>
    </div>
  )
})
