export const locationAuthText: Record<
  string,
  { title: string; paragraph: string; btn: string }
> = {
  '/auth/login': {
    title: 'Войти',
    paragraph: 'Введите почту и пароль, чтобы войти в учетную запись',
    btn: 'Войти'
  },
  '/auth/register': {
    title: 'Регистрация',
    paragraph: 'Введите данные, чтобы создать учетную запись',
    btn: 'Зарегистрироваться'
  },
  '/auth/reset-password': {
    title: 'Смена пароля',
    paragraph: 'Введите почту и пароль, чтобы сменить пароль учетной записи',
    btn: 'Сменить'
  }
}
