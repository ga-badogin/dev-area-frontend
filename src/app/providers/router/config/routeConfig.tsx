import { TAppRoutes, TAppRoutesProps } from '../types/router'

import { getRoute } from '@/shared/lib/router/getRoute'
import { AuthPageAsync } from '@/pages/AuthPage'

export const routeConfig: Record<TAppRoutes, TAppRoutesProps> = {
  auth: {
    path: getRoute(['auth']),
    element: <AuthPageAsync />
  }
}
