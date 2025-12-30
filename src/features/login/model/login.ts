import { createAsyncThunk } from '@reduxjs/toolkit'
import { IThunkConfig } from '@/app/providers/store/exclude'
import {
  getAuthActions,
  IAuthResponse,
  ILoginReqBody,
  loginInitiate
} from '@/entities/auth'
import { getNotificationThunks } from '@/entities/notification'
import { ACCESS_TOKEN_KEY } from '@/shared/consts/localestorage'
import { getAppRoute } from '@/shared/lib/router/getRoute'

export const login = createAsyncThunk<
  IAuthResponse,
  ILoginReqBody,
  IThunkConfig<string>
>('auth/login', async (body, thunkAPI) => {
  const {
    rejectWithValue,
    dispatch,
    extra: { navigate }
  } = thunkAPI

  const { setIsCode } = getAuthActions(dispatch)
  const { addNotification } = getNotificationThunks(dispatch)

  try {
    const response = await dispatch(loginInitiate(body)).unwrap()

    if (!response) {
      throw new Error()
    } else if ('accessToken' in response) {
      localStorage.setItem(ACCESS_TOKEN_KEY, response.accessToken)
      navigate(getAppRoute(['main']))
      addNotification({
        title: 'Успех',
        paragraph: 'Вход в учетную запись выполнен'
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
    console.log(e.data.message)
    addNotification({
      title: 'Ошибка',
      paragraph: e.data.message
    })

    return rejectWithValue('')
  }
})
