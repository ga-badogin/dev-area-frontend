import { AppDispatch } from '@/app/providers/store/exclude'
import { getNotificationActions } from '../slice/notificationSlice'

export const deleteNotification = (id: number) => (dispatch: AppDispatch) => {
  const { removeNotification } = getNotificationActions(dispatch)

  removeNotification(id)
  setTimeout(() => {
    removeNotification(id)
  }, 800)
}
