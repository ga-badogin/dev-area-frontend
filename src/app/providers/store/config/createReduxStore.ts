import { configureStore, ReducersMapObject } from '@reduxjs/toolkit'
import { IStateSchema } from '../types/stateSchema'
import { createReducerManager } from './createReducerManager'
import { rtkApi } from '@/shared/api/rtkApi'
import { notificationReducer } from '@/entities/notification'
import { NavigateFunction } from 'react-router-dom'
import { themeReducer } from '@/entities/theme'
import { authReducer } from '@/entities/auth'

export function createReduxStore(
  initialState: IStateSchema,
  navigate: NavigateFunction,
  asyncReducers?: ReducersMapObject<IStateSchema>
) {
  const rootReducers: ReducersMapObject<IStateSchema> = {
    ...asyncReducers,
    theme: themeReducer,
    notification: notificationReducer,
    auth: authReducer,

    [rtkApi.reducerPath]: rtkApi.reducer
  }

  const reducerManager = createReducerManager(rootReducers)

  const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({ thunk: { extraArgument: { navigate } } }).concat(
        rtkApi.middleware
      )
  })

  // @ts-ignore
  store.reducerManager = reducerManager

  return store
}
