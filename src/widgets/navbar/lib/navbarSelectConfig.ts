import { TSelectConfig } from '@/shared/ui/Select/Select'
import { getAppRoute, getAuthRoute } from '@/shared/lib/router/getRoute'

export const authRoutesSelectConfig: TSelectConfig<string> = [
  { content: 'Вход', value: getAuthRoute(['login']) },
  { content: 'Регистрация', value: getAuthRoute(['register']) },
  {
    content: 'Смена пароля',
    value: getAuthRoute(['resetPassword'])
  }
]

export const appRoutesSelectConfig: TSelectConfig<string> = [
  { content: 'Поиск', value: getAppRoute(['searchProfile']) }
]
