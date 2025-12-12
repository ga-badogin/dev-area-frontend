import { createAsyncThunk } from '@reduxjs/toolkit'
import { IThunkConfig } from '@/app/providers/store/exclude'
import { IResetPasswordReqBody, IResetResponse } from '../types/authApi'
import { resetPasswordInitiate } from '../../api/authApi'

export const resetPassword = createAsyncThunk<
  IResetResponse,
  IResetPasswordReqBody,
  IThunkConfig<string>
>('auth/resetPassword', async (body, thunkAPI) => {
  const { extra, rejectWithValue, dispatch } = thunkAPI

  try {
    const response = await dispatch(resetPasswordInitiate(body))

    if (!response.data) {
      throw new Error()
    }

    if (response.data === true) {
      extra.navigate('/auth/login')
    }

    return response.data
  } catch (e) {
    console.log(e)
    return rejectWithValue('')
  }
})
