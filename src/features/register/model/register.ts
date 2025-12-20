import { bindActionCreators, createAsyncThunk } from '@reduxjs/toolkit'
import { IThunkConfig } from '@/app/providers/store/exclude'
import {
  authActions,
  IAuthResponse,
  IRegisterReqBody,
  registerInitiate
} from '@/entities/auth'
import { addNotification } from '@/entities/notification'
import { ACCESS_TOKEN_KEY } from '@/shared/consts/localestorage'

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

  const { setIsCode } = bindActionCreators(authActions, dispatch)

  try {
    const response = await dispatch(registerInitiate(body)).unwrap()

    if (!response) {
      throw new Error()
    } else if ('accessToken' in response) {
      localStorage.setItem(ACCESS_TOKEN_KEY, response.accessToken)
      navigate('/main')
      dispatch(
        addNotification({
          title: 'Успех',
          paragraph: 'Учетная запись создана'
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
    console.log(e)
    dispatch(
      addNotification({
        title: 'Ошибка',
        paragraph: e.data.message
      })
    )
    return rejectWithValue('')
  }
})
