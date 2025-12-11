import { FieldError } from 'react-hook-form'

export const validateEmail = (email: string): FieldError | null => {
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
    : null
}

export const validatePassword = (
  password: string,
  isStrict = false
): FieldError | null => {
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
    : null
}

export const validateCode = (code: string | undefined): FieldError | null => {
  const errors: string[] = []

  if (code === undefined || code.length === 0) {
    errors.push('Введите пароль')
  } else if (code.length < 6) {
    errors.push('Введите пароль до конца')
  }

  return errors.length > 0
    ? {
        type: 'required',
        message: errors.join('/')
      }
    : null
}
