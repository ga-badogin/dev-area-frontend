import { createAsyncThunk } from '@reduxjs/toolkit'
import { IThunkConfig } from '@/app/providers/store/exclude'
import {
  IResetPasswordReqBody,
  IResetResponse
} from '../../../entities/auth/model/types/authApi'
import { getAuthActions, resetPasswordInitiate } from '@/entities/auth'
import { getNotificationThunks } from '@/entities/notification'
import { getAuthRoute } from '@/shared/lib/router/getRoute'

export const resetPassword = createAsyncThunk<
  IResetResponse,
  IResetPasswordReqBody,
  IThunkConfig<string>
>('auth/resetPassword', async (body, thunkAPI) => {
  const {
    extra: { navigate },
    rejectWithValue,
    dispatch
  } = thunkAPI

  const { setIsCode } = getAuthActions(dispatch)
  const { addNotification } = getNotificationThunks(dispatch)

  try {
    const response = await dispatch(resetPasswordInitiate(body)).unwrap()

    if (!response) {
      throw new Error()
    } else if (response === true) {
      navigate(getAuthRoute(['login']))
      setIsCode(false)
      addNotification({
        title: 'Успех',
        paragraph: 'Пароль сменен, можете войти в уч. запись'
      })
    } else {
      setIsCode(true)
      addNotification({
        title: 'Введите код',
        paragraph: response.message
      })
    }

    return response
  } catch (e: any) {
    console.log(e)
    addNotification({
      title: 'Ошибка',
      paragraph: e.data.message
    })
    return rejectWithValue('')
  }
})
