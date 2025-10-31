export const locationText: Record<
  string,
  { title: string; paragraph: string }
> = {
  '/auth/login': {
    title: 'Войти',
    paragraph: 'Введите почту и пароль, чтобы войти в учетную запись'
  },
  '/auth/register': {
    title: 'Регистрация',
    paragraph: 'Введите данные, чтобы создать учетную запись'
  },
  '/auth/reset-password': {
    title: 'Смена пароля',
    paragraph: 'Введите почту и пароль, чтобы сменить пароль учетной записи'
  }
}
