import { IProfileSchema } from '../types/profileSchema'
import { buildSlice } from '@/shared/lib/store/buildSlice'
import { PayloadAction } from '@reduxjs/toolkit'

const initialState: IProfileSchema = {
  isEdit: false,
  isLoading: false
}

const profileSlice = buildSlice({
  name: 'profile',
  initialState,
  reducers: {
    setIsEdit: (state, { payload }: PayloadAction<boolean>) => {
      state.isEdit = payload
    },
    setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload
    }
  }
})

export const {
  reducer: profileReducer,
  useActions: useProfileActions,
  getActions: getProfileActions
} = profileSlice
