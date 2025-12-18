import { notificationActions } from '../slice/notificationSlice'
import { bindActionCreators } from '@reduxjs/toolkit'
import { AppDispatch } from '@/app/providers/store/exclude'

export const deleteNotification = (id: number) => (dispatch: AppDispatch) => {
  const { removeNotification } = bindActionCreators(
    notificationActions,
    dispatch
  )

  removeNotification(id)
  setTimeout(() => {
    removeNotification(id)
  }, 800)
}
