import { Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RequireAuth } from './RequireAuth'
import { TRouteProps } from '../../../../shared/lib/router/types'
import { RequireProfile } from './RequireProfile'

interface RenderRouterProps {
  routeConfig: Record<string, TRouteProps>
}

export const RenderRouter = ({ routeConfig }: RenderRouterProps) => {
  const renderWithWrapper = useCallback((route: TRouteProps) => {
    const { path, element, fallback, unAuthOnly, onboarding } = route

    const routeElement = (
      <RequireProfile onboarding={onboarding}>
        <RequireAuth unAuthOnly={unAuthOnly}>
          {fallback ? (
            <Suspense key={path} fallback={fallback}>
              {element}
            </Suspense>
          ) : (
            element
          )}
        </RequireAuth>
      </RequireProfile>
    )

    return <Route key={path} path={path} element={routeElement} />
  }, [])

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
}
