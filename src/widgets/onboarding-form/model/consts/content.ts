import { getOnboardingRoute } from '@/shared/lib/router/getRoute'

export const onboardingRoutesContent: Record<
  string,
  { title: string; paragraph: string }
> = {
  [getOnboardingRoute(['about'])]: {
    title: 'Расскажите о себе',
    paragraph:
      'Кратко опишите, кто вы, чем занимаетесь и к каким целям стремитесь. Это поможет сформировать первое впечатление и лучше представить ваш профиль.'
  },
  [getOnboardingRoute(['experience'])]: {
    title: 'Опыт',
    paragraph:
      'Добавьте информацию о предыдущем опыте работы или проектах. Укажите роли, ключевые достижения и технологии, с которыми вы работали.'
  },
  [getOnboardingRoute(['education'])]: {
    title: 'Образование',
    paragraph:
      'Расскажите о вашем образовании, курсах или сертификациях. Это поможет лучше понять вашу экспертизу и профессиональный путь.'
  },
  [getOnboardingRoute(['skill'])]: {
    title: 'Навыки',
    paragraph:
      'Укажите ключевые навыки и компетенции. Это позволит быстрее находить релевантные возможности и подчеркнёт ваши сильные стороны.'
  }
}
