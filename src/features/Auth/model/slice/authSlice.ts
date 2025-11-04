import { IAuthSchema } from '../types/authSchema'
import { buildSlice } from '@/shared/lib/store/buildSlice'
import { authApi } from '../../api/authApi'
import { isAnyOf } from '@reduxjs/toolkit'
import { ACCESS_TOKEN_KEY } from '@/shared/consts/localestorage'

const initialState: IAuthSchema = {
  isCode: false,
  isAuth: false
}

const authSlice = buildSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      isAnyOf(
        authApi.endpoints.register.matchFulfilled,
        authApi.endpoints.login.matchFulfilled,
        authApi.endpoints.resetPassword.matchFulfilled
      ),
      (state, { payload }) => {
        state.isCode = true

        if (typeof payload === 'object' && payload.accessToken) {
          localStorage.setItem(ACCESS_TOKEN_KEY, payload.accessToken)
          state.isAuth = true
        }
      }
    )
  }
})

export const {
  actions: authActions,
  reducer: authReducer,
  useActions: useAuthActions
} = authSlice
