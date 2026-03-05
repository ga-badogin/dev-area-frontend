export interface INotificationSchema {
  notifications: INotification[]
}

export interface INotificationPayload {
  title?: string
  paragraph?: string
  duration?: number
  onApprove?: () => void
  onReject?: () => void
}

export interface INotification
  extends Omit<INotificationPayload, 'duration' | 'onApprove' | 'onReject'> {
  id: number
  approveId?: string
  rejectId?: string
  deleted?: boolean
}
