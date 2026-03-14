import { TOnboardingRoutes, TRouteConfig } from '@/shared/lib/router/types'
import { getOnboardingRoute } from '@/shared/lib/router/getRoute'
import { Navigate } from 'react-router-dom'
import {
  AboutAsync,
  AboutSkeleton,
  EducationListAsync,
  EducationListSkeleton,
  ExperienceListAsync,
  ExperienceListSkeleton,
  SkillBoardAsync,
  SkillBoardSkeleton
} from '@/entities/profile'
import { Welcome } from '../ui/Welcome/Welcome'

export const onboardingRouteConfig: TRouteConfig<keyof TOnboardingRoutes> = {
  welcome: {
    path: getOnboardingRoute(['welcome'], 'path'),
    element: <Welcome />
  },
  about: {
    path: getOnboardingRoute(['about'], 'path'),
    element: <AboutAsync />,
    fallback: <AboutSkeleton />
  },
  experience: {
    path: getOnboardingRoute(['experience'], 'path'),
    element: <ExperienceListAsync />,
    fallback: <ExperienceListSkeleton />
  },
  education: {
    path: getOnboardingRoute(['education'], 'path'),
    element: <EducationListAsync />,
    fallback: <EducationListSkeleton />
  },
  skill: {
    path: getOnboardingRoute(['skill'], 'path'),
    element: <SkillBoardAsync />,
    fallback: <SkillBoardSkeleton />
  },
  index: {
    path: getOnboardingRoute(['index']),
    element: <Navigate to={getOnboardingRoute(['welcome'])} />
  }
}
