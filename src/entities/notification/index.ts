export type { INotificationSchema } from './model/types/notificationSchema'
export { notificationReducer } from './model/slice/notificationSlice'
export { addNotification } from './model/services/addNotification'
export type {
  INotificationPayload,
  INotification
} from './model/types/notificationSchema'
export { useNotification } from './model/hooks/useNotification'
export { useNotifications } from './model/selectors/getNotifications'
