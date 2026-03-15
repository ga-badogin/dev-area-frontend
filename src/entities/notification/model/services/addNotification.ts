import {
  INotification,
  INotificationConfirmationIds,
  INotificationPayload
} from '../types/notificationSchema'
import { AppDispatch } from '@/app/providers/store/exclude'
import { getNotificationActions } from '../slice/notificationSlice'
import { deleteNotification } from './deleteNotification'
import { registerResolver } from '@/shared/lib/store/resolverRegister'

export const addNotification =
  (payload: INotificationPayload) => (dispatch: AppDispatch) => {
    const { duration = 0, confirmation, ...other } = payload

    const { createNotification } = getNotificationActions(dispatch)
    let confirmationIds: INotificationConfirmationIds | undefined

    if (confirmation) {
      const { onApprove, onReject } = confirmation
      confirmationIds = {
        approveId: registerResolver(onApprove),
        rejectId: registerResolver(onReject)
      }
    }

    const newNotification: INotification = {
      id: Date.now(),
      confirmationIds,
      ...other
    }

    createNotification(newNotification)

    if (duration > 0) {
      setTimeout(() => {
        dispatch(deleteNotification(newNotification.id))
      }, duration + 800)
    }
  }
