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
  page: 0,
  limit: 4,
  search: '',
  isLoading: false,
  hasMore: true,
  loadingCount: 0
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
      .addCase(profileSearch.pending, (state) => {
        state.isLoading = true
        state.loadingCount += 1
      })
      .addCase(profileSearch.fulfilled, (state, { payload, meta }) => {
        state.loadingCount -= 1
        state.isLoading = state.loadingCount > 0
        state.hasMore = payload.length >= state.limit

        if (meta.arg.replace) {
          profilesAdapter.setAll(state, payload)
        } else {
          profilesAdapter.addMany(state, payload)
        }
      })
      .addCase(profileSearch.rejected, (state) => {
        state.loadingCount -= 1
        state.isLoading = state.loadingCount > 0
      })
})

export const {
  reducer: profileSearchReducer,
  useActions: useProfileSearchActions,
  getActions: getProfileSearchActions
} = profileSearchSlice
