import { IProfileSearchSchema } from '../types/profileSearchSchema'
import { buildSlice } from '@/shared/lib/store/buildSlice'
import { IAbout, ProfileListView, TProfileListView } from '@/entities/profile'
import { createEntityAdapter, PayloadAction } from '@reduxjs/toolkit'
import { IStateSchema } from '@/app/providers/store/exclude'
import { profileSearch } from '../services/profileSearch'

const profilesAdapter = createEntityAdapter<IAbout, string>({
  selectId: (comment) => comment.id
})

const initialState = profilesAdapter.getInitialState<IProfileSearchSchema>({
  ids: [],
  entities: {},
  view: ProfileListView.LINE,
  page: 1,
  limit: 4,
  search: '',
  isLoading: false,
  hasMore: true
})

export const profilesEntitySelectors =
  profilesAdapter.getSelectors<IStateSchema>(
    (state) => state.profileSearch || initialState
  )

const profileSearchSlice = buildSlice({
  name: 'profileSearch',
  initialState,
  reducers: {
    setView: (state, { payload }: PayloadAction<TProfileListView>) => {
      state.view = payload
    },
    setPage: (state, { payload }: PayloadAction<number>) => {
      state.page = payload
    },
    nextPage: (state) => {
      state.page += 1
    },
    setSearch: (state, { payload }: PayloadAction<string>) => {
      state.search = payload
    }
  },
  extraReducers: (builder) =>
    builder
      .addCase(profileSearch.pending, (state, { payload, meta }) => {
        state.isLoading = true
      })
      .addCase(profileSearch.fulfilled, (state, { payload, meta }) => {
        state.isLoading = false
        state.hasMore = payload.length >= state.limit

        if (meta.arg.replace) {
          profilesAdapter.setAll(state, payload)
        } else {
          profilesAdapter.addMany(state, payload)
        }
      })
      .addCase(profileSearch.rejected, (state, { payload, meta }) => {
        state.isLoading = false
      })
})

export const {
  reducer: profileSearchReducer,
  useActions: useProfileSearchActions,
  getActions: getProfileSearchActions
} = profileSearchSlice
