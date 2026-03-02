import { getOnboardingRoute } from '@/shared/lib/router/getRoute'

export const chainNavigation = {
  [getOnboardingRoute(['about'])]: getOnboardingRoute(['experience']),
  [getOnboardingRoute(['experience'])]: getOnboardingRoute(['education']),
  [getOnboardingRoute(['education'])]: getOnboardingRoute(['skill'])
}
