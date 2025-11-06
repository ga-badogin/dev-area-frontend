import { createAsyncThunk } from '@reduxjs/toolkit'
import { IThunkConfig } from '@/app/providers/store/exclude'
import { loginInitiate } from '../../api/authApi'
import { IAuthResponse, ILoginReqBody } from '../types/authApi'
import { addNotification } from '@/entities/Notification'

export const login = createAsyncThunk<
  IAuthResponse,
  ILoginReqBody,
  IThunkConfig<string>
>('auth/login', async (body, thunkAPI) => {
  const { rejectWithValue, dispatch } = thunkAPI

  try {
    const response = await dispatch(loginInitiate(body))

    if (!response.data) {
      throw new Error()
    } else if ('accessToken' in response.data) {
      dispatch(
        addNotification({
          title: 'Успех',
          paragraph: 'Вход в учетную запись выполнен'
        })
      )
    } else {
      dispatch(
        addNotification({
          title: 'Введите код',
          paragraph: response.data.message
        })
      )
    }

    return response.data
  } catch (e) {
    console.log(e)
    return rejectWithValue('')
  }
})
