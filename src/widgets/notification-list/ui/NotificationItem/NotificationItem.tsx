import cls from './NotificationItem.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { INotification, useNotificationThunks } from '@/entities/notification'
import { Title } from '@/shared/ui/Title/Title'
import { Paragraph } from '@/shared/ui/Paragraph/Paragraph'
import { Sizes } from '@/shared/consts/ui'
import { Block } from '@/shared/ui/Block/Block'
import { Button } from '@/shared/ui/Button/Button'
import { getResolver } from '@/entities/notification/model/slice/notificationRegister'

interface NotificationItemProps {
  className?: string
  notification: INotification
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const { className, notification } = props
  const { id, deleted, title, paragraph, approveId, rejectId } = notification

  const { deleteNotification } = useNotificationThunks()

  const handleAction = (callback?: () => void) => () => {
    callback?.()
    deleteNotification(id)
  }

  return (
    <div
      className={classNames(
        cls.notificationItemWrapper,
        { [cls.deleted]: deleted },
        [className]
      )}
    >
      <Block
        handleCross={() => deleteNotification(id)}
        className={cls.notificationItem}
      >
        <Title size={Sizes.L} as="h2">
          {title}
        </Title>
        <Paragraph size={Sizes.S}>{paragraph}</Paragraph>
        {approveId && (
          <Button onClick={handleAction(getResolver(approveId))}>Ок</Button>
        )}
        {rejectId && (
          <Button onClick={handleAction(getResolver(rejectId))}>Отмена</Button>
        )}
      </Block>
    </div>
  )
})
