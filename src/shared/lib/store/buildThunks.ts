import { useMemo } from 'react'
import { ActionCreatorsMapObject, bindActionCreators } from '@reduxjs/toolkit'
import { useAppDispatch } from '../hooks/useAppDispatch/useAppDispatch'
import { AppDispatch } from '@/app/providers/store/exclude'

export const buildThunks = <T extends ActionCreatorsMapObject>(thunks: T) => {
  const getThunks = (dispatch: AppDispatch) =>
    bindActionCreators(thunks, dispatch)

  const useThunks = () => {
    const dispatch = useAppDispatch()
    return useMemo(() => getThunks(dispatch), [dispatch])
  }

  return {
    getThunks,
    useThunks
  }
}
