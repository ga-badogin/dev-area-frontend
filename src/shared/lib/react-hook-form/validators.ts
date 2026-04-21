import { FieldError, MultipleFieldErrors } from 'react-hook-form'

export const validateEmail = (email: string): FieldError | undefined => {
  const types: MultipleFieldErrors = {}

  if (email.length === 0) {
    types.required = 'Поле почты обязательно для заполнения'
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    types.pattern = 'Введите корректный email адрес'
  }

  return Object.keys(types).length > 0
    ? {
        type: 'validate',
        message: 'Почта не валидна',
        types
      }
    : undefined
}

export const validatePassword = (
  password: string,
  isStrict = false
): FieldError | undefined => {
  const types: MultipleFieldErrors = {}

  if (password.length === 0) {
    types.required = 'Поле пароля обязательно для заполнения'
  }
  if (isStrict) {
    if (password.length < 6) {
      types.minLength = 'Пароль должен содержать минимум 6 символов'
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      types.pattern =
        'Пароль должен содержать буквы в верхнем и нижнем регистре и цифры'
    }
  }

  return Object.keys(types).length > 0
    ? {
        type: 'validate',
        message: 'Пароль не валиден',
        types
      }
    : undefined
}

export const validateUsername = (username: string): FieldError | undefined => {
  const types: MultipleFieldErrors = {}

  if (username.length === 0) {
    types.required = 'Поле обязательно для заполнения'
  }
  if (!/^[a-zA-Z0-9._-]+$/.test(username)) {
    types.pattern = 'Допустимы только латинские буквы, цифры и . _ -'
  }

  return Object.keys(types).length > 0
    ? {
        type: 'required',
        message: 'Имя пользователя не валидно',
        types
      }
    : undefined
}

export const validateCode = (
  code: string | undefined
): FieldError | undefined => {
  const types: MultipleFieldErrors = {}

  if (code === undefined || code.length === 0) {
    types.required = 'Введите код'
  } else if (code.length < 6) {
    types.minLength = 'Введите код до конца'
  }

  return Object.keys(types).length > 0
    ? {
        type: 'required',
        message: 'Код не валиден',
        types
      }
    : undefined
}

export const validateIdentifier = (
  identifier: string
): FieldError | undefined => {
  const isEmail = identifier.includes('@')

  return (isEmail ? validateEmail : validateUsername)(identifier)
}
