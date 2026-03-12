import { createAsyncThunk } from '@reduxjs/toolkit'
import { IThunkConfig } from '@/app/providers/store/exclude'
import { IAbout, searchProfileInitiate } from '@/entities/profile'
import { getSearchParams } from '../selectors/getSearchParams'

export const profileSearch = createAsyncThunk<
  IAbout[],
  { replace?: boolean },
  IThunkConfig<string>
>('', async (_, thunkAPI) => {
  const { extra, rejectWithValue, dispatch, getState } = thunkAPI

  const searchParams = getSearchParams(getState())

  try {
    const response = await dispatch(
      searchProfileInitiate(searchParams)
    ).unwrap()

    if (!response) {
      throw new Error()
    }

    return response
  } catch (e) {
    console.log(e)
    return rejectWithValue('')
  }
})
