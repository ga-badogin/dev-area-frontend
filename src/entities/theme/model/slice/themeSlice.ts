import { IThemeSchema, TAppTheme } from '../types/themeSchema'
import { buildSlice } from '@/shared/lib/store/buildSlice'
import { AppTheme } from '../consts/theme'
import { PayloadAction } from '@reduxjs/toolkit'

const initialState: IThemeSchema = {
  theme: AppTheme.DARK
}

const themeSlice = buildSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, { payload }: PayloadAction<TAppTheme>) => {
      state.theme = payload
    }
  }
})

export const { reducer: themeReducer, useActions: useThemeActions } = themeSlice
