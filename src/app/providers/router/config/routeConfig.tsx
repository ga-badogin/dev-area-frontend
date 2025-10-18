import { TAppRoutes, TAppRoutesProps } from '../types/router'

import { getRoute } from '@/shared/lib/router/getRoute'

export const routeConfig: Record<TAppRoutes, TAppRoutesProps> = {
  mock: {
    path: getRoute(['mock', { mock: undefined }]),
    element: <div />
  }
}
