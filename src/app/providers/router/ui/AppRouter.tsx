import { useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RequireAuth } from './RequireAuth'
import { routeConfig } from '../config/routeConfig'
import { TAppRoutesProps } from '../types/router'

export const AppRouter = () => {
  const renderWithWrapper = useCallback((route: TAppRoutesProps) => {
    const { path } = route

    return (
      <Route key={path} path={path} element={<RequireAuth route={route} />} />
    )
  }, [])

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
}
