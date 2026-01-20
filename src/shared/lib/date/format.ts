export type TFormatFunc = (date: Date) => string

export const capitalize = (str: string, pos?: number) => {
  const capitalizedChar = str.charAt(pos || 0).toUpperCase()
  const st = str.split('')

  st[pos || 0] = capitalizedChar

  return st.join('')
}

export const formatDay: TFormatFunc = (date) => {
  return capitalize(
    date.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    }),
    3
  ).slice(0, -3)
}

export const formatMonth: TFormatFunc = (date) => {
  return capitalize(
    date
      .toLocaleDateString('ru-RU', { month: 'long', year: 'numeric' })
      .slice(0, -3)
  )
}

export const formatYearRange: TFormatFunc = (date) => {
  const firstYear = date.getFullYear() - 4
  const secondYear = date.getFullYear() + 4

  return [firstYear, secondYear].join(' - ')
}

export const formatYear: TFormatFunc = (date) => date.getFullYear().toString()
