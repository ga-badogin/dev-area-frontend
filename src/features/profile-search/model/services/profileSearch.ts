import { createAsyncThunk } from '@reduxjs/toolkit'
import { IThunkConfig } from '@/app/providers/store/exclude'
import { IAbout } from '@/entities/profile'
import { getSearchParams } from '../selectors/getSearchParams'
import { addQueryParams } from '@/shared/lib/url/addQueryParams'
import { searchProfileInitiate } from '../../api/profileSearchApi'

export const profileSearch = createAsyncThunk<
  IAbout[],
  { replace?: boolean },
  IThunkConfig<string>
>('profileSearch', async (_, thunkAPI) => {
  const { extra, rejectWithValue, dispatch, getState } = thunkAPI

  const searchParams = getSearchParams(getState())
  const { search } = searchParams

  try {
    addQueryParams({ search })
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
