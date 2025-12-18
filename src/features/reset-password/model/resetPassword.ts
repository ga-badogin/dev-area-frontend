import { bindActionCreators, createAsyncThunk } from '@reduxjs/toolkit'
import { IThunkConfig } from '@/app/providers/store/exclude'
import {
  IResetPasswordReqBody,
  IResetResponse
} from '../../../entities/auth/model/types/authApi'
import { authActions, resetPasswordInitiate } from '@/entities/auth'
import { addNotification } from '@/entities/Notification'

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
    const response = await dispatch(resetPasswordInitiate(body))

    if (!response.data) {
      throw new Error()
    } else if (response.data === true) {
      navigate('/auth/login')
      setIsCode(false)
    } else {
      setIsCode(true)
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
