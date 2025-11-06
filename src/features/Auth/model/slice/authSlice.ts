import { IAuthSchema } from '../types/authSchema'
import { buildSlice } from '@/shared/lib/store/buildSlice'
import { isAnyOf } from '@reduxjs/toolkit'
import { ACCESS_TOKEN_KEY } from '@/shared/consts/localestorage'
import { register } from '../services/register'
import { resetPassword } from '../services/resetPassword'
import { login } from '../services/login'

const initialState: IAuthSchema = {
  isCode: false,
  isAuth: false,
  isLoading: false
}

const authSlice = buildSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(
        isAnyOf(login.fulfilled, register.fulfilled, resetPassword.fulfilled),
        (state, { payload }) => {
          state.isLoading = false
          state.isCode = true
          if (typeof payload === 'object' && 'accessToken' in payload) {
            localStorage.setItem(ACCESS_TOKEN_KEY, payload.accessToken)
            state.isAuth = true
          }
        }
      )
      .addMatcher(
        isAnyOf(login.pending, register.pending, resetPassword.pending),
        (state, { payload }) => {
          state.isLoading = true
        }
      )
  }
})

export const {
  actions: authActions,
  reducer: authReducer,
  useActions: useAuthActions
} = authSlice
