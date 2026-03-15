import { FC, ReactNode, useEffect, useLayoutEffect } from 'react'
import { useDispatch, useStore } from 'react-redux'
import { Reducer } from '@reduxjs/toolkit'
import {
  IReduxStoreWithManager,
  IStateSchema,
  TStateSchemaKey
} from '@/app/providers/store/exclude'

export type TReducersList = {
  [reducerKey in TStateSchemaKey]?: Reducer<
    NonNullable<IStateSchema[reducerKey]>
  >
}

interface DynamicModuleLoaderProps {
  children: ReactNode
  reducers: TReducersList
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
  const { children, reducers, removeAfterUnmount = true } = props
  const store = useStore() as IReduxStoreWithManager
  const dispatch = useDispatch()

  useLayoutEffect(() => {
    const mountedReducers = store.reducerManager.getReducerMap()

    Object.entries(reducers).forEach(([reducerKey, reducer]) => {
      const mounted = mountedReducers[reducerKey as TStateSchemaKey]

      if (!mounted) {
        store.reducerManager.add(reducerKey as TStateSchemaKey, reducer)
        dispatch({ type: `@INIT ${reducerKey} reducer` })
      }
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([reducerKey]) => {
          store.reducerManager.remove(reducerKey as TStateSchemaKey)
          dispatch({ type: `@DESTROY ${reducerKey} reducer` })
        })
      }
    }
  }, [])

  return <>{children}</>
}
