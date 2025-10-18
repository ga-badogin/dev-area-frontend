import { FC, ReactNode } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/createReduxStore'
import { IStateSchema } from '../types/stateSchema'
import { Reducer, ReducersMapObject } from '@reduxjs/toolkit'

interface StoreProviderProps {
  children: ReactNode
  initialState?: DeepPartial<IStateSchema>
  asyncReducers?: DeepPartial<Reducer<IStateSchema>>
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
  const { children, initialState, asyncReducers } = props

  const store = createReduxStore(
    initialState as IStateSchema,
    asyncReducers as ReducersMapObject<IStateSchema>
  )

  return <Provider store={store}>{children}</Provider>
}
