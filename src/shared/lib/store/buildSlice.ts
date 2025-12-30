import {
  bindActionCreators,
  createSlice,
  CreateSliceOptions,
  SliceCaseReducers,
  SliceSelectors
} from '@reduxjs/toolkit'
import { useAppDispatch } from '../hooks/useAppDispatch/useAppDispatch'
import { useMemo } from 'react'
import { AppDispatch } from '@/app/providers/store/exclude'

export function buildSlice<
  State,
  CaseReducers extends SliceCaseReducers<State>,
  Name extends string,
  Selectors extends SliceSelectors<State>,
  ReducerPath extends string = Name
>(
  options: CreateSliceOptions<State, CaseReducers, Name, ReducerPath, Selectors>
) {
  const slice = createSlice(options)

  const getActions = (dispatch: AppDispatch) =>
    bindActionCreators(slice.actions, dispatch)

  const useActions = (): typeof slice.actions => {
    const dispatch = useAppDispatch()
    return useMemo(() => getActions(dispatch), [dispatch])
  }

  return {
    ...slice,
    getActions,
    useActions
  }
}
