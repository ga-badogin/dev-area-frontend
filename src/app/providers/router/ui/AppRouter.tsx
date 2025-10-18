import { Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RequireAuth } from './RequireAuth'
import { routeConfig } from '../config/routeConfig'
import { TAppRoutesProps } from '../types/router'

export const AppRouter = () => {
  const renderWithWrapper = useCallback((route: TAppRoutesProps) => {
    const { element, path, authOnly } = route

    return (
      <Route
        key={path}
        path={path}
        element={authOnly ? <RequireAuth>{element}</RequireAuth> : element}
      />
    )
  }, [])

  return (
    <Suspense fallback={''}>
      <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
    </Suspense>
  )
}
