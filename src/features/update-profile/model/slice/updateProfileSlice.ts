import { buildSlice } from '@/shared/lib/store/buildSlice'
import { IUpdateProfileSchema } from '../types/updateProfileShema'
import { updateProfile } from '../services/updateProfile'
import { PayloadAction } from '@reduxjs/toolkit'

const initialState: IUpdateProfileSchema = {
  isEdit: false,
  isLoading: false
}

const updateProfileSlice = buildSlice({
  name: 'updateProfile',
  initialState,
  reducers: {
    setIsEdit: (state, { payload }: PayloadAction<boolean>) => {
      state.isEdit = payload
    }
  },
  extraReducers: (builder) =>
    builder
      .addCase(updateProfile.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateProfile.fulfilled, (state) => {
        state.isLoading = false
        state.isEdit = false
      })
      .addCase(updateProfile.rejected, (state) => {
        state.isLoading = false
      })
})

export const {
  reducer: updateProfileReducer,
  useActions: useUpdateProfileActions
} = updateProfileSlice
