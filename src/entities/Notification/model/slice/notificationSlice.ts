import { createSlice } from '@reduxjs/toolkit'
import { INotificationSchema } from '../types/notificationSchema'

const initialState: INotificationSchema = {
  notifications: [
    { title: 'Ошибка', paragraph: 'Произошла ошибка при входе' },
    { paragraph: 'Вход выполнен успешно' }
  ]
}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {}
})

export const { actions: Actions } = notificationSlice
export const { reducer: Reducer } = notificationSlice
