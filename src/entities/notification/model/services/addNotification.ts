import {
  INotification,
  INotificationPayload
} from '../types/notificationSchema'
import { AppDispatch } from '@/app/providers/store/exclude'
import { getNotificationActions } from '../slice/notificationSlice'
import { deleteNotification } from './deleteNotification'
import { registerResolver } from '@/entities/notification/model/slice/notificationRegister'

export const addNotification =
  (payload: INotificationPayload) => (dispatch: AppDispatch) => {
    const { duration = 0, onApprove, onReject, ...other } = payload

    const { createNotification } = getNotificationActions(dispatch)

    const approveId = onApprove ? registerResolver(onApprove) : undefined
    const rejectId = onReject ? registerResolver(onReject) : undefined

    const newNotification: INotification = {
      id: Date.now(),
      approveId,
      rejectId,
      ...other
    }

    createNotification(newNotification)

    if (duration > 0) {
      setTimeout(() => {
        dispatch(deleteNotification(newNotification.id))
      }, duration + 800)
    }
  }
