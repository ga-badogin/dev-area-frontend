export type { INotificationSchema } from './model/types/notificationSchema'
export {
  notificationReducer,
  getNotificationActions
} from './model/slice/notificationSlice'
export { addNotification } from './model/services/addNotification'
export type {
  INotificationPayload,
  INotification
} from './model/types/notificationSchema'
export {
  getNotificationThunks,
  useNotificationThunks
} from './model/services/notificationThunks'
export { useNotifications } from './model/selectors/getNotifications'
