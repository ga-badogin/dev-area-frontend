import { createAsyncThunk } from '@reduxjs/toolkit'
import { IThunkConfig } from '@/app/providers/store/exclude'
import { IAbout, searchProfileInitiate } from '@/entities/profile'
import { getSearchParams } from '../selectors/getSearchParams'
import { addQueryParams } from '@/shared/lib/url/addQueryParams'

export const profileSearch = createAsyncThunk<
  IAbout[],
  { replace?: boolean },
  IThunkConfig<string>
>('', async (_, thunkAPI) => {
  const { extra, rejectWithValue, dispatch, getState } = thunkAPI

  const searchParams = getSearchParams(getState())

  try {
    addQueryParams(searchParams)
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
