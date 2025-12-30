import { createAsyncThunk } from '@reduxjs/toolkit'
import { IThunkConfig } from '@/app/providers/store/exclude'
import {
  getAuthActions,
  IAuthResponse,
  IRegisterReqBody,
  registerInitiate
} from '@/entities/auth'
import { getNotificationThunks } from '@/entities/notification'
import { ACCESS_TOKEN_KEY } from '@/shared/consts/localestorage'
import { getAppRoute } from '@/shared/lib/router/getRoute'

export const register = createAsyncThunk<
  IAuthResponse,
  IRegisterReqBody,
  IThunkConfig<string>
>('auth/register', async (body, thunkAPI) => {
  const {
    rejectWithValue,
    dispatch,
    extra: { navigate }
  } = thunkAPI

  const { setIsCode } = getAuthActions(dispatch)
  const { addNotification } = getNotificationThunks(dispatch)

  try {
    const response = await dispatch(registerInitiate(body)).unwrap()

    if (!response) {
      throw new Error()
    } else if ('accessToken' in response) {
      localStorage.setItem(ACCESS_TOKEN_KEY, response.accessToken)
      navigate(getAppRoute(['main']))
      addNotification({
        title: 'Успех',
        paragraph: 'Учетная запись создана'
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
