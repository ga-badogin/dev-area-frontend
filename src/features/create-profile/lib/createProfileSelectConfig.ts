import { TSelectConfig } from '@/shared/ui/Select/Select'
import { getCreateProfileRoute } from '@/shared/lib/router/getRoute'

export const createProfileSelectConfig: TSelectConfig<string> = [
  { content: 'О себе', value: getCreateProfileRoute(['about']) },
  { content: 'Опыт', value: getCreateProfileRoute(['experience']) },
  { content: 'Образование', value: getCreateProfileRoute(['education']) },
  { content: 'Навыки', value: getCreateProfileRoute(['skill']) }
]
