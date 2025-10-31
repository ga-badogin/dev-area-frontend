import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { IStateSchema } from '../types/stateSchema'
import { createReducerManager } from './createReducerManager'
import { rtkApi } from '@/shared/api/rtkApi'
import { AuthReducer } from '@/features/Auth'

export function createReduxStore(
  initialState: IStateSchema,
  asyncReducers?: ReducersMapObject<IStateSchema>
) {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    ...asyncReducers,
    auth: AuthReducer,
    [rtkApi.reducerPath]: rtkApi.reducer
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(rtkApi.middleware)
  })

  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}
