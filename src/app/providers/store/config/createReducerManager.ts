import {
  combineReducers,
  Reducer,
  ReducersMapObject,
  UnknownAction
} from '@reduxjs/toolkit'
import {
  IStateSchema,
  IStateSchemaPartial,
  TStateSchemaKey
} from '../types/stateSchema'
import { IReducerManager } from '../types/reducerManager'

export function createReducerManager(
  initialReducers: ReducersMapObject<IStateSchema>
): IReducerManager {
  const reducers = { ...initialReducers }

  let combinedReducer = combineReducers(reducers)

  let keysToRemove: TStateSchemaKey[] = []

  return {
    getReducerMap: () => reducers,

    reduce: (state: IStateSchema | undefined, action: UnknownAction) => {
      if (keysToRemove.length > 0 && state) {
        state = { ...state }
        keysToRemove.forEach((key) => {
          delete state?.[key]
        })
        keysToRemove = []
      }

      return combinedReducer(state as IStateSchemaPartial, action)
    },

    add: (key: TStateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return
      }

      reducers[key] = reducer

      combinedReducer = combineReducers(reducers)
    },

    remove: (key: TStateSchemaKey) => {
      if (!key || !reducers[key]) {
        return
      }

      delete reducers[key]

      keysToRemove.push(key)

      combinedReducer = combineReducers(reducers)
    }
  }
}
