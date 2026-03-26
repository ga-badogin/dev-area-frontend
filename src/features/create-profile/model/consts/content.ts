import { getCreateProfileRoute } from '@/shared/lib/router/getRoute'

export const createProfileRoutesContent: Record<
  string,
  { title: string; paragraph: string }
> = {
  [getCreateProfileRoute(['about'])]: {
    title: 'Расскажите о себе',
    paragraph:
      'Кратко опишите, кто вы, чем занимаетесь и к каким целям стремитесь. Это поможет сформировать первое впечатление и лучше представить ваш профиль.'
  },
  [getCreateProfileRoute(['experience'])]: {
    title: 'Где работали?',
    paragraph:
      'Добавьте информацию о предыдущем опыте работы или проектах. Укажите роли, ключевые достижения и технологии, с которыми вы работали.'
  },
  [getCreateProfileRoute(['education'])]: {
    title: 'Какое образование получали?',
    paragraph:
      'Расскажите о вашем образовании, курсах или сертификациях. Это поможет лучше понять вашу экспертизу и профессиональный путь.'
  },
  [getCreateProfileRoute(['skill'])]: {
    title: 'Какими навыками обладаете?',
    paragraph:
      'Укажите ключевые навыки и компетенции. Это позволит быстрее находить релевантные возможности и подчеркнёт ваши сильные стороны.'
  }
}
