import { FieldError } from 'react-hook-form'

export const validateEmail = (email: string): FieldError | null => {
  if (email.length === 0) {
    return {
      type: 'required',
      message: 'Поле почты обязательно для заполнения'
    }
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    return {
      type: 'pattern',
      message: 'Введите корректный email адрес'
    }
  }

  return null
}

export const validatePassword = (
  password: string,
  isStrict = false
): FieldError | null => {
  if (password.length === 0) {
    return {
      type: 'required',
      message: 'Поле пароля обязательно для заполнения'
    }
  } else if (isStrict) {
    if (password.length < 6) {
      return {
        type: 'minLength',
        message: 'Пароль должен содержать минимум 6 символов'
      }
    } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      return {
        type: 'pattern',
        message:
          'Пароль должен содержать буквы в верхнем и нижнем регистре и цифры'
      }
    }
  }

  return null
}
