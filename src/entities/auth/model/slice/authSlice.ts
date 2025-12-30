import { IAuthSchema } from '../types/authSchema'
import { buildSlice } from '@/shared/lib/store/buildSlice'
import { PayloadAction } from '@reduxjs/toolkit'

const initialState: IAuthSchema = {
  isCode: false
}

const authSlice = buildSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsCode: (state, { payload }: PayloadAction<boolean>) => {
      state.isCode = payload
    }
  }
})

export const { reducer: authReducer, getActions: getAuthActions } = authSlice
