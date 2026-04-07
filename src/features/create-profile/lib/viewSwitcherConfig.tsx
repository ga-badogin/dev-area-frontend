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
import { TViewSwitcherConfig } from '../../../shared/ui/ViewSwitcher/ViewSwitcher'
import { TView } from '../model/types/createProfileSchema'

export const viewSwitcherConfig: TViewSwitcherConfig<TView> = {
  welcome: {
    element: <Welcome />
  },
  about: {
    element: <AboutAsync isEdit />,
    fallback: <AboutSkeleton />
  },
  experience: {
    element: <ExperienceListAsync isEdit />,
    fallback: <ExperienceListSkeleton />
  },
  education: {
    element: <EducationListAsync isEdit />,
    fallback: <EducationListSkeleton />
  },
  skill: {
    element: <SkillBoardAsync isEdit />,
    fallback: <SkillBoardSkeleton />
  }
}
