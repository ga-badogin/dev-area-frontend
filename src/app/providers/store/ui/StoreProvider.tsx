import { FC, ReactNode, useMemo } from 'react'
import { Provider } from 'react-redux'
import { createReduxStore } from '../config/createReduxStore'
import { IStateSchema } from '../types/stateSchema'
import { Reducer, ReducersMapObject } from '@reduxjs/toolkit'
import { useNavigate } from 'react-router-dom'

interface StoreProviderProps {
  children: ReactNode
  initialState?: DeepPartial<IStateSchema>
  asyncReducers?: DeepPartial<Reducer<IStateSchema>>
}

export const StoreProvider: FC<StoreProviderProps> = (props) => {
  const { children, initialState, asyncReducers } = props

  const navigate = useNavigate()

  const store = useMemo(() => {
    return createReduxStore(
      initialState as IStateSchema,
      navigate,
      asyncReducers as ReducersMapObject<IStateSchema>
    )
  }, [])

  return <Provider store={store}>{children}</Provider>
}
