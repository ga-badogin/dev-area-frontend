import { TSelectConfig } from '@/shared/ui/Select/Select'

export const createProfileSelectConfig: TSelectConfig<string> = [
  { content: 'О себе', value: 'about' },
  { content: 'Опыт', value: 'experience' },
  { content: 'Образование', value: 'education' },
  { content: 'Навыки', value: 'skill' }
]
