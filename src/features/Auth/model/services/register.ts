import { createAsyncThunk } from '@reduxjs/toolkit'
import { IThunkConfig } from '@/app/providers/store/exclude'
import { registerInitiate } from '../../api/authApi'
import { IAuthResponse, IRegisterReqBody } from '../types/authApi'
import { addNotification } from '@/entities/Notification'

export const register = createAsyncThunk<
  IAuthResponse,
  IRegisterReqBody,
  IThunkConfig<string>
>('auth/register', async (body, thunkAPI) => {
  const { rejectWithValue, dispatch } = thunkAPI
  console.log('fetch')

  try {
    const response = await dispatch(registerInitiate(body))

    if (!response.data) {
      throw new Error()
    } else if ('accessToken' in response.data) {
      dispatch(
        addNotification({
          title: 'Успех',
          paragraph: 'Учетная запись создана'
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
