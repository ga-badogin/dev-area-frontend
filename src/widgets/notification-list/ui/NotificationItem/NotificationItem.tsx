import cls from './NotificationItem.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { INotification, useNotificationThunks } from '@/entities/notification'
import { Button } from '@/shared/ui/Button/Button'
import { Title } from '@/shared/ui/Title/Title'
import { Paragraph } from '@/shared/ui/Paragraph/Paragraph'
import { Sizes } from '@/shared/consts/ui'
import { Block } from '@/shared/ui/Block/Block'

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
      <Block
        handleCross={() => deleteNotification(id)}
        className={cls.notificationItem}
      >
        <Title size={Sizes.L} as="h2">
          {title}
        </Title>
        <Paragraph size={Sizes.S}>{paragraph}</Paragraph>
      </Block>
    </div>
  )
})
