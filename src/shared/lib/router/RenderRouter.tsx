import { Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RequireAuth } from './RequireAuth'
import { TRouteProps } from './types'

interface RenderRouterProps {
  routeConfig: Record<string, TRouteProps>
}

export const RenderRouter = ({ routeConfig }: RenderRouterProps) => {
  const renderWithWrapper = useCallback((route: TRouteProps) => {
    const { path, element, fallback, unAuthOnly } = route

    const routeElement = (
      <RequireAuth unAuthOnly={unAuthOnly}>
        {fallback ? (
          <Suspense key={path} fallback={fallback}>
            {element}
          </Suspense>
        ) : (
          element
        )}
      </RequireAuth>
    )

    return <Route key={path} path={path} element={routeElement} />
  }, [])

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
}
