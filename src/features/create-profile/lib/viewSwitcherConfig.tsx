import { TViewSwitcherElements } from '@/shared/ui/ViewSwitcher/ViewSwitcher'
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

type TViewSwitcherArgs = { onClickWelcome: () => void }

export const viewSwitcherConfig = ({
  onClickWelcome
}: TViewSwitcherArgs): TViewSwitcherElements<string> => [
  {
    element: <Welcome onClick={onClickWelcome} />,
    view: 'welcome'
  },
  {
    element: <AboutAsync isEdit />,
    fallback: <AboutSkeleton />,
    view: 'about'
  },
  {
    element: <ExperienceListAsync isEdit />,
    fallback: <ExperienceListSkeleton />,
    view: 'experience'
  },
  {
    element: <EducationListAsync isEdit />,
    fallback: <EducationListSkeleton />,
    view: 'education'
  },
  {
    element: <SkillBoardAsync isEdit />,
    fallback: <SkillBoardSkeleton />,
    view: 'skill'
  }
]
