import { bindActionCreators, createAsyncThunk } from '@reduxjs/toolkit'
import { IThunkConfig } from '@/app/providers/store/exclude'
import {
  authActions,
  IAuthResponse,
  ILoginReqBody,
  loginInitiate
} from '@/entities/auth'
import { addNotification } from '@/entities/notification'
import { ACCESS_TOKEN_KEY } from '@/shared/consts/localestorage'

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

  const { setIsCode } = bindActionCreators(authActions, dispatch)

  try {
    const response = await dispatch(loginInitiate(body)).unwrap()

    if (!response) {
      throw new Error()
    } else if ('accessToken' in response) {
      localStorage.setItem(ACCESS_TOKEN_KEY, response.accessToken)
      navigate('/main')
      dispatch(
        addNotification({
          title: 'Успех',
          paragraph: 'Вход в учетную запись выполнен'
        })
      )
    } else {
      setIsCode(true)
      dispatch(
        addNotification({
          title: 'Введите код',
          paragraph: response.message
        })
      )
    }

    return response
  } catch (e: any) {
    console.log(e.data.message)
    dispatch(
      addNotification({
        title: 'Ошибка',
        paragraph: e.data.message
      })
    )
    return rejectWithValue('')
  }
})
