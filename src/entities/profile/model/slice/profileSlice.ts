import { createSlice } from '@reduxjs/toolkit'
import { IProfileSchema } from '../types/profileSchema'

const initialState: IProfileSchema = {
  isEdit: false
}

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {}
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
