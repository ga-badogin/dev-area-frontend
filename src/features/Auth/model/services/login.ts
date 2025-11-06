import { createAsyncThunk } from '@reduxjs/toolkit'
import { IThunkConfig } from '@/app/providers/store/exclude'
import { loginInitiate } from '../../api/authApi'
import { ILoginReqBody } from '../types/authApi'

export const login = createAsyncThunk<any, ILoginReqBody, IThunkConfig<string>>(
  'auth/login',
  async (body, thunkAPI) => {
    const { extra, rejectWithValue, dispatch } = thunkAPI

    try {
      const response = await dispatch(loginInitiate(body))

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (e) {
      console.log(e)
      return rejectWithValue('')
    }
  }
)
