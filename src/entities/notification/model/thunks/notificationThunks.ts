import { buildThunks } from '@/shared/lib/store/buildThunks'
import { addNotification } from '../services/addNotification'
import { deleteNotification } from '../services/deleteNotification'

const notificationThunks = buildThunks({ addNotification, deleteNotification })

export const {
  getThunks: getNotificationThunks,
  useThunks: useNotificationThunks
} = notificationThunks
