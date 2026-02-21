import { TOnboardingRoutes, TRouteConfig } from '@/shared/lib/router/types'
import { getOnboardingRoute } from '@/shared/lib/router/getRoute'
import {
  About,
  EducationList,
  ExperienceList,
  SkillBoard
} from '@/entities/profile'

export const onboardingRouteConfig: TRouteConfig<keyof TOnboardingRoutes> = {
  welcome: {
    path: getOnboardingRoute(['welcome'], 'path'),
    element: 'asdasdas',
    onboarding: true
  },
  about: {
    path: getOnboardingRoute(['about'], 'path'),
    element: <About />,
    onboarding: true
  },
  experience: {
    path: getOnboardingRoute(['experience'], 'path'),
    element: <ExperienceList />,
    onboarding: true
  },
  education: {
    path: getOnboardingRoute(['education'], 'path'),
    element: <EducationList />,
    onboarding: true
  },
  skill: {
    path: getOnboardingRoute(['skill'], 'path'),
    element: <SkillBoard />,
    onboarding: true
  }
}
