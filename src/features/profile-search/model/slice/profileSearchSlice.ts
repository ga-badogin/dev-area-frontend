import { IProfileSearchSchema } from '../types/profileSearchSchema'
import { buildSlice } from '@/shared/lib/store/buildSlice'
import { IAbout, ProfileListView, TProfileListView } from '@/entities/profile'
import { createEntityAdapter, PayloadAction } from '@reduxjs/toolkit'
import { IStateSchema } from '@/app/providers/store/exclude'
import { buildSelector } from '@/shared/lib/store/buildSelector'

// const initialState: IProfileSearchSchema = {
//   view: ProfileListView.LINE
// }

const profilesAdapter = createEntityAdapter<IAbout, string>({
  selectId: (comment) => comment.id
})

const initialState = profilesAdapter.getInitialState<IProfileSearchSchema>({
  ids: [],
  entities: {},
  view: ProfileListView.LINE
})

export const getArticles = profilesAdapter.getSelectors<IStateSchema>(
  (state) => state.profileSearch || initialState
)

// export const [useView] = buildSelector(getArticles.selectAll)

const profileSearchSlice = buildSlice({
  name: 'profileSearch',
  initialState,
  reducers: {
    setView: (state, { payload }: PayloadAction<TProfileListView>) => {
      state.view = payload
    }
  }
})

export const {
  reducer: profileSearchReducer,
  useActions: useProfileSearchActions
} = profileSearchSlice
