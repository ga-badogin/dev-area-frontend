import { IAuthSchema } from '../types/authSchema'
import { buildSlice } from '@/shared/lib/store/buildSlice'

const initialState: IAuthSchema = {
  email: '',
  password: ''
}

const authSlice = buildSlice({
  name: 'auth',
  initialState,
  reducers: {}
  // extraReducers: (builder) => {
  // 	builder
  // 		.addCase(.pending, (state) => {
  // 			state.isLoading = true
  // 			state.error = undefined
  // 		})
  // 		.addCase(.fulfilled, (state, action: PayloadAction<>) => {
  //               state.isLoading = false
  //               state.data = action.payload
  //           })
  // 		.addCase(.rejected, (state, action) => {
  // 			state.isLoading = false
  // 			state.error = action.payload
  // 		})
  // }
})

export const {
  actions: AuthActions,
  reducer: AuthReducer,
  useActions: useAuthActions
} = authSlice
