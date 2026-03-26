import { TOnboardingRoutes, TRouteConfig } from '@/shared/lib/router/types'
import { getCreateProfileRoute } from '@/shared/lib/router/getRoute'
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
import { Navigate } from 'react-router-dom'

export const createProfileRouteConfig: TRouteConfig<keyof TOnboardingRoutes> = {
  welcome: {
    path: getCreateProfileRoute(['welcome'], 'path'),
    element: <Welcome />
  },
  about: {
    path: getCreateProfileRoute(['about'], 'path'),
    element: <AboutAsync isEdit />,
    fallback: <AboutSkeleton />
  },
  experience: {
    path: getCreateProfileRoute(['experience'], 'path'),
    element: <ExperienceListAsync isEdit />,
    fallback: <ExperienceListSkeleton />
  },
  education: {
    path: getCreateProfileRoute(['education'], 'path'),
    element: <EducationListAsync isEdit />,
    fallback: <EducationListSkeleton />
  },
  skill: {
    path: getCreateProfileRoute(['skill'], 'path'),
    element: <SkillBoardAsync isEdit />,
    fallback: <SkillBoardSkeleton />
  },
  index: {
    path: getCreateProfileRoute(['index']),
    element: <Navigate to={getCreateProfileRoute(['welcome'])} />
  }
}
