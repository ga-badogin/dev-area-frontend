import {
  INotification,
  INotificationPayload
} from '../types/notificationSchema'
import { AppDispatch } from '@/app/providers/store/exclude'
import { getNotificationActions } from '../slice/notificationSlice'
import { deleteNotification } from './deleteNotification'

export const addNotification =
  (payload: INotificationPayload) => (dispatch: AppDispatch) => {
    const { duration = 0, ...other } = payload

    const { createNotification } = getNotificationActions(dispatch)

    const newNotification: INotification = {
      id: Date.now(),
      ...other
    }

    createNotification(newNotification)

    if (duration > 0) {
      setTimeout(() => {
        dispatch(deleteNotification(newNotification.id))
      }, duration + 800)
    }
  }
