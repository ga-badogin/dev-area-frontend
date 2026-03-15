export interface INotificationSchema {
  notifications: INotification[]
}

export interface INotificationPayload {
  title?: string
  paragraph?: string
  duration?: number
  confirmation?: {
    onApprove: () => void
    onReject: () => void
  }
}

export interface INotification
  extends Omit<INotificationPayload, 'duration' | 'confirmation'> {
  id: number
  confirmationIds?: INotificationConfirmationIds
  deleted?: boolean
}

export interface INotificationConfirmationIds {
  approveId: string
  rejectId: string
}
