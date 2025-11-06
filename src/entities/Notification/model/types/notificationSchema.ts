export interface INotificationSchema {
  notifications: INotification[]
}

interface INotification {
  title?: string
  paragraph: string
}
