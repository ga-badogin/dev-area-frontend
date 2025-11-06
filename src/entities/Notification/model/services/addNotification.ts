import {
  INotification,
  INotificationPayload
} from '../types/notificationSchema'
import { AppDispatch } from '@/app/providers/store/exclude'
import { bindActionCreators } from '@reduxjs/toolkit'
import { notificationActions } from '../slice/notificationSlice'
import { deleteNotification } from './deleteNotification'

export const addNotification =
  (payload: INotificationPayload) => (dispatch: AppDispatch) => {
    const { duration = 0, ...other } = payload

    const { createNotification } = bindActionCreators(
      notificationActions,
      dispatch
    )

    const newNotification: INotification = {
      id: Date.now(),
      ...other
    }

    createNotification(newNotification)

    if (duration > 0) {
      setTimeout(() => {
        dispatch(deleteNotification(newNotification.id))
      }, duration)
    }
  }
