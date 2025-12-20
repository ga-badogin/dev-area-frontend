import { addNotification } from '../services/addNotification'
import { deleteNotification } from '../services/deleteNotification'
import { useAppDispatch } from '@/shared/lib/hooks/useAppDispatch/useAppDispatch'
import { bindActionCreators } from '@reduxjs/toolkit'

const notificationThunks = {
  addNotification,
  deleteNotification
}

export const useNotification = () => {
  const dispatch = useAppDispatch()
  return bindActionCreators(notificationThunks, dispatch)
}
