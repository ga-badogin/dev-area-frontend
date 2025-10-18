import { IStateSchema, TStateSchemaKey } from './stateSchema'
import { EnhancedStore, Reducer, ReducersMapObject } from '@reduxjs/toolkit'

export interface IReducerManager {
  getReducerMap: () => ReducersMapObject<IStateSchema>
  reduce: Reducer<IStateSchema>
  add: (key: TStateSchemaKey, reducer: Reducer) => void
  remove: (key: TStateSchemaKey) => void
}

export interface IReduxStoreWithManager extends EnhancedStore<IStateSchema> {
  reducerManager: IReducerManager
}
