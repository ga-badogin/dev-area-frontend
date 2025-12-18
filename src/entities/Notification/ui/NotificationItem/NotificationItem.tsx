import cls from './NotificationItem.module.scss'
import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { INotification } from '../../model/types/notificationSchema'
import { Text } from '@/shared/ui/Text/Text'
import { Button, ButtonTheme } from '@/shared/ui/Button/Button'
import { useNotification } from '../../model/hooks/useNotification'
import CrossIcon from '@/shared/assets/icons/Cross.svg'
import { Sizes } from '@/shared/consts/ui'

interface NotificationItemProps extends INotification {
  className?: string
}

export const NotificationItem = memo((props: NotificationItemProps) => {
  const { className, paragraph, title, deleted, id } = props

  const { deleteNotification } = useNotification()

  return (
    <div
      className={classNames(
        cls.notificationItemWrapper,
        { [cls.deleted]: deleted },
        [className]
      )}
    >
      <div className={cls.notificationItem}>
        <Text title={title} paragraph={paragraph} size={Sizes.S} />
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
