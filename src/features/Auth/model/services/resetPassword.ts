import { createAsyncThunk } from '@reduxjs/toolkit'
import { IThunkConfig } from '@/app/providers/store/exclude'
import { IResetPasswordReqBody } from '../types/authApi'
import { resetPasswordInitiate } from '../../api/authApi'

export const resetPassword = createAsyncThunk<
  any,
  IResetPasswordReqBody,
  IThunkConfig<string>
>('auth/resetPassword', async (body, thunkAPI) => {
  const { extra, rejectWithValue, dispatch } = thunkAPI

  try {
    const response = await dispatch(resetPasswordInitiate(body))

    if (!response.data) {
      throw new Error()
    }

    return response.data
  } catch (e) {
    console.log(e)
    return rejectWithValue('')
  }
})
