import { getAuthRoute } from '@/shared/lib/router/getRoute'

export const authRoutesContent: Record<
  string,
  { title: string; paragraph: string; btn: string }
> = {
  [getAuthRoute(['login'])]: {
    title: 'Войти',
    paragraph: 'Введите почту и пароль, чтобы войти в учетную запись',
    btn: 'Войти'
  },
  [getAuthRoute(['register'])]: {
    title: 'Регистрация',
    paragraph: 'Введите данные, чтобы создать учетную запись',
    btn: 'Зарегистрироваться'
  },
  [getAuthRoute(['resetPassword'])]: {
    title: 'Смена пароля',
    paragraph: 'Введите почту и пароль, чтобы сменить пароль учетной записи',
    btn: 'Сменить'
  }
}
