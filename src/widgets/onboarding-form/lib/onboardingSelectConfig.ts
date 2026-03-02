import { TSelectConfig } from '@/shared/ui/Select/Select'
import { getOnboardingRoute } from '@/shared/lib/router/getRoute'

export const onboardingSelectConfig: TSelectConfig<string> = [
  { content: 'О себе', value: getOnboardingRoute(['about']) },
  { content: 'Опыт', value: getOnboardingRoute(['experience']) },
  { content: 'Образование', value: getOnboardingRoute(['education']) },
  { content: 'Навыки', value: getOnboardingRoute(['skill']) }
]
