import { createAsyncThunk } from '@reduxjs/toolkit'
import { IThunkConfig } from '@/app/providers/store/exclude'
import { registerInitiate } from '../../api/authApi'
import { IRegisterReqBody } from '../types/authApi'

export const register = createAsyncThunk<
  any,
  IRegisterReqBody,
  IThunkConfig<string>
>('auth/register', async (body, thunkAPI) => {
  const { extra, rejectWithValue, dispatch } = thunkAPI

  try {
    const response = await dispatch(registerInitiate(body))

    if (!response.data) {
      throw new Error()
    }

    return response.data
  } catch (e) {
    console.log(e)
    return rejectWithValue('')
  }
})
