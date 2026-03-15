import cls from './NotificationItem.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { INotification, useNotificationThunks } from '@/entities/notification'
import { Title } from '@/shared/ui/Title/Title'
import { Paragraph } from '@/shared/ui/Paragraph/Paragraph'
import { Sizes } from '@/shared/consts/ui'
import { Block } from '@/shared/ui/Block/Block'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { getResolver } from '@/shared/lib/store/resolverRegister'

interface NotificationItemProps {
  className?: string
  notification: INotification
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const { className, notification } = props
  const { id, deleted, title, paragraph, confirmationIds } = notification

  const { deleteNotification } = useNotificationThunks()

  const handleAction = (actionId: string) => () => {
    const callback = getResolver(actionId)
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
        {confirmationIds && (
          <div className={cls.actions}>
            <Button
              className={cls.button}
              theme={ButtonTheme.OUTLINE}
              onClick={handleAction(confirmationIds.rejectId)}
            >
              Отмена
            </Button>
            <Button
              className={cls.button}
              onClick={handleAction(confirmationIds.approveId)}
            >
              Ок
            </Button>
          </div>
        )}
      </Block>
    </div>
  )
})
