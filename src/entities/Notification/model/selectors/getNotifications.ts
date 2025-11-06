import { buildSelector } from '@/shared/lib/store/buildSelector'

export const [useNotifications] = buildSelector(
  (state) => state.notification.notifications
)