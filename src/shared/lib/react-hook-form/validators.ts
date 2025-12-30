import { FieldError } from 'react-hook-form'

export const validateEmail = (email: string): FieldError | undefined => {
  const errors: string[] = []

  if (email.length === 0) {
    errors.push('Поле почты обязательно для заполнения')
  }
  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    errors.push('Введите корректный email адрес')
  }

  return errors.length > 0
    ? {
        type: 'required',
        message: errors.join('/')
      }
    : undefined
}

export const validatePassword = (
  password: string,
  isStrict = false
): FieldError | undefined => {
  const errors: string[] = []

  if (password.length === 0) {
    errors.push('Поле пароля обязательно для заполнения')
  }
  if (isStrict) {
    if (password.length < 6) {
      errors.push('Пароль должен содержать минимум 6 символов')
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      errors.push(
        'Пароль должен содержать буквы в верхнем и нижнем регистре и цифры'
      )
    }
  }

  return errors.length > 0
    ? {
        type: 'required',
        message: errors.join('/')
      }
    : undefined
}

export const validateUsername = (username: string): FieldError | undefined => {
  const errors: string[] = []

  if (username.length === 0) {
    errors.push('Поле обязательно для заполнения')
  }
  if (!/^[a-zA-Z0-9._-]+$/.test(username)) {
    errors.push('Допустимы только латинские буквы, цифры и . _ -')
  }

  return errors.length > 0
    ? {
        type: 'required',
        message: errors.join('/')
      }
    : undefined
}

export const validateCode = (
  code: string | undefined
): FieldError | undefined => {
  const errors: string[] = []

  if (code === undefined || code.length === 0) {
    errors.push('Введите код')
  } else if (code.length < 6) {
    errors.push('Введите код до конца')
  }

  return errors.length > 0
    ? {
        type: 'required',
        message: errors.join('/')
      }
    : undefined
}

export const validateIdentifier = (
  identifier: string
): FieldError | undefined => {
  const isEmail = identifier.includes('@')

  return (isEmail ? validateEmail : validateUsername)(identifier)
}
