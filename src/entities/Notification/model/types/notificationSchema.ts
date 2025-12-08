export interface INotificationSchema {
  notifications: INotification[]
}

export interface INotificationPayload {
  title?: string
  paragraph?: string
  duration?: number
}

export interface INotification extends Omit<INotificationPayload, 'duration'> {
  id: number
  deleted?: boolean
}
