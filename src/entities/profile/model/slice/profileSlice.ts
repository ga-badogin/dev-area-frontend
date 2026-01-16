import { IProfileSchema } from '../types/profileSchema'
import { buildSlice } from '@/shared/lib/store/buildSlice'
import { PayloadAction } from '@reduxjs/toolkit'

const initialState: IProfileSchema = {
  isEdit: true
}

const profileSlice = buildSlice({
  name: 'profile',
  initialState,
  reducers: {
    setIsEdit(state, { payload }: PayloadAction<boolean>) {
      state.isEdit = payload
    }
  }
})

export const { reducer: profileReducer, useActions: useProfileActions } =
  profileSlice
