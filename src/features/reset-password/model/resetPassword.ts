import { bindActionCreators, createAsyncThunk } from '@reduxjs/toolkit'
import { IThunkConfig } from '@/app/providers/store/exclude'
import {
  IResetPasswordReqBody,
  IResetResponse
} from '../../../entities/auth/model/types/authApi'
import { authActions, resetPasswordInitiate } from '@/entities/auth'
import { addNotification } from '@/entities/notification'

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

  const { setIsCode } = bindActionCreators(authActions, dispatch)

  try {
    const response = await dispatch(resetPasswordInitiate(body)).unwrap()

    if (!response) {
      throw new Error()
    } else if (response === true) {
      navigate('/auth/login')
      setIsCode(false)
      dispatch(
        addNotification({
          title: 'Успех',
          paragraph: 'Пароль сменен, можете войти в уч. запись'
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
