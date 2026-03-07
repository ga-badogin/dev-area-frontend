import { IUserSchema } from '../types/userSchema'
import { buildSlice } from '@/shared/lib/store/buildSlice'
import { userApi } from '../../api/userApi'

const initialState: IUserSchema = {}

const userSlice = buildSlice({
  name: 'user',
  initialState,
  reducers: {
    // setIsAuth: (state, { payload }: PayloadAction<boolean>) => {
    //   state.isAuth = payload
    // }
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(
        userApi.endpoints.getMe.matchFulfilled,
        (state, { payload }) => {
          state.info = payload
        }
      )
      .addMatcher(
        userApi.endpoints.getMe.matchRejected,
        (state, { payload }) => {
          state.info = null
        }
      )
  }
})

export const { reducer: userReducer } = userSlice
