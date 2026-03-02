import { TSelectConfig } from '@/shared/ui/Select/Select'
import { getAuthRoute } from '@/shared/lib/router/getRoute'

export const navbarSelectConfig: TSelectConfig<string> = [
  { content: 'Вход', value: getAuthRoute(['login']) },
  { content: 'Регистрация', value: getAuthRoute(['register']) },
  {
    content: 'Смена пароля',
    value: getAuthRoute(['resetPassword'])
  }
]
