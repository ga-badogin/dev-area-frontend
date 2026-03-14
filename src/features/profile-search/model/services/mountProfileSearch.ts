import { createAsyncThunk } from '@reduxjs/toolkit'
import { IThunkConfig } from '@/app/providers/store/exclude'
import { getMounted } from '../selectors/getMounted'
import { getProfileSearchActions } from '../slice/profileSearchSlice'
import { profileSearch } from './profileSearch'

export const mountProfileSearch = createAsyncThunk<
  any,
  URLSearchParams,
  IThunkConfig<string>
>('profileSearch/mountProfileSearch', async (searchParams, thunkAPI) => {
  const { dispatch, getState } = thunkAPI

  const mounted = getMounted(getState())
  const { setSearch, initState } = getProfileSearchActions(dispatch)

  if (!mounted) {
    const search = searchParams.get('search')

    if (search) {
      setSearch(search)
    }

    initState()
    dispatch(profileSearch({}))
  }
})
