import { buildThunks } from '@/shared/lib/store/buildThunks'
import { addNotification } from './addNotification'
import { deleteNotification } from './deleteNotification'

const notificationThunks = buildThunks({ addNotification, deleteNotification })

export const {
  getThunks: getNotificationThunks,
  useThunks: useNotificationThunks
} = notificationThunks
