import { INotification, INotificationSchema } from '../types/notificationSchema'
import { buildSlice } from '@/shared/lib/store/buildSlice'
import { PayloadAction } from '@reduxjs/toolkit'

const initialState: INotificationSchema = {
  notifications: []
}

const notificationSlice = buildSlice({
  name: 'notification',
  initialState,
  reducers: {
    createNotification: (state, { payload }: PayloadAction<INotification>) => {
      state.notifications = [...state.notifications, payload]
    },
    removeNotification: (state, { payload }: PayloadAction<number>) => {
      state.notifications = state.notifications
        .map((notification) => {
          if (notification.id === payload) {
            if (notification.deleted) {
              return undefined
            }
            return { ...notification, deleted: true }
          }
          return notification
        })
        .filter((notification) => notification !== undefined)
    }
  }
})

export const { reducer: notificationReducer, actions: notificationActions } =
  notificationSlice
