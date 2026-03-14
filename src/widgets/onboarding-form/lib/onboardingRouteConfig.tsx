import { TOnboardingRoutes, TRouteConfig } from '@/shared/lib/router/types'
import { getOnboardingRoute } from '@/shared/lib/router/getRoute'
import { Navigate } from 'react-router-dom'
import {
  About,
  EducationList,
  ExperienceList,
  SkillBoard
} from '@/entities/profile'
import { Welcome } from '../ui/Welcome/Welcome'

export const onboardingRouteConfig: TRouteConfig<keyof TOnboardingRoutes> = {
  welcome: {
    path: getOnboardingRoute(['welcome'], 'path'),
    element: <Welcome />
  },
  about: {
    path: getOnboardingRoute(['about'], 'path'),
    element: <About />
  },
  experience: {
    path: getOnboardingRoute(['experience'], 'path'),
    element: <ExperienceList />
  },
  education: {
    path: getOnboardingRoute(['education'], 'path'),
    element: <EducationList />
  },
  skill: {
    path: getOnboardingRoute(['skill'], 'path'),
    element: <SkillBoard />
  },
  index: {
    path: getOnboardingRoute(['index']),
    element: <Navigate to={getOnboardingRoute(['welcome'])} />
  }
}
