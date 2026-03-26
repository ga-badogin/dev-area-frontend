import { getCreateProfileRoute } from '@/shared/lib/router/getRoute'

export const chainNavigation = {
  [getCreateProfileRoute(['about'])]: getCreateProfileRoute(['experience']),
  [getCreateProfileRoute(['experience'])]: getCreateProfileRoute(['education']),
  [getCreateProfileRoute(['education'])]: getCreateProfileRoute(['skill'])
}
