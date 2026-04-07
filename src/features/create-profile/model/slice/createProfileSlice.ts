import { buildSlice } from '@/shared/lib/store/buildSlice'
import { PayloadAction } from '@reduxjs/toolkit'
import { createProfile } from '../services/createProfile'
import { ICreateProfileSchema, TView } from '../types/createProfileSchema'

const initialState: ICreateProfileSchema = {
  isLoading: false,
  view: 'welcome'
}

const createProfileSlice = buildSlice({
  name: 'createProfile',
  initialState,
  reducers: {
    setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload
    },
    setView: (state, { payload }: PayloadAction<TView>) => {
      state.view = payload
    }
  },
  extraReducers: (builder) =>
    builder
      .addCase(createProfile.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createProfile.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(createProfile.rejected, (state) => {
        state.isLoading = false
      })
})

export const {
  reducer: createProfileReducer,
  useActions: useCreateProfileActions
} = createProfileSlice
