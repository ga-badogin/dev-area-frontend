import { TSelectConfig } from '@/shared/ui/Select/Select'
import { TView } from '../model/types/createProfileSchema'

export const createProfileSelectConfig: TSelectConfig<TView> = [
  { content: 'О себе', value: 'about' },
  { content: 'Опыт', value: 'experience' },
  { content: 'Образование', value: 'education' },
  { content: 'Навыки', value: 'skill' }
]
