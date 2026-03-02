import { Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'
import { RequireAuth } from './RequireAuth'
import { TRouteProps } from '../../../../shared/lib/router/types'
import { RequireProfile } from './RequireProfile'
import { RequireFirstRender } from './RequireFirstRender'

interface RenderRouterProps {
  routeConfig: Record<string, TRouteProps>
  isChildRouter?: boolean
  firstRenderRoute?: string
}

export const RenderRouter = ({
  routeConfig,
  isChildRouter,
  firstRenderRoute
}: RenderRouterProps) => {
  const renderWithWrapper = useCallback(
    (route: TRouteProps) => {
      const { path, element, fallback, unAuthOnly, onboarding, authOnly } =
        route

      const content = fallback ? (
        <Suspense key={path} fallback={fallback}>
          {element}
        </Suspense>
      ) : (
        element
      )

      const routeElement = isChildRouter ? (
        <RequireFirstRender firstRenderRoute={firstRenderRoute}>
          {content}
        </RequireFirstRender>
      ) : (
        <RequireAuth unAuthOnly={unAuthOnly} authOnly={authOnly}>
          <RequireProfile onboarding={onboarding}>{content}</RequireProfile>
        </RequireAuth>
      )

      return <Route key={path} path={path} element={routeElement} />
    },
    [isChildRouter]
  )

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
}
