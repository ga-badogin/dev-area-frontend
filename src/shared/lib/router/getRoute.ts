import { TKeyWithParams } from '../../types'
import { TRouteParams } from '@/app/providers/router/exclude'

export const getRoute = ([path]: TKeyWithParams<TRouteParams>): string => {
  // prettier-ignore
  switch (path) {
    case 'auth': return '/auth'
  }
}
