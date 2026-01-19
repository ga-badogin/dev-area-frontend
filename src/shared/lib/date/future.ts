export type TFutureFunc = (date: Date, today: Date) => boolean

export const isFutureDay: TFutureFunc = (date: Date, today: Date) =>
  date > today

export const isFutureMonth: TFutureFunc = (date: Date, today: Date) =>
  date.getFullYear() > today.getFullYear() ||
  (date.getFullYear() === today.getFullYear() &&
    date.getMonth() > today.getMonth())

export const isFutureYear: TFutureFunc = (date: Date, today: Date) =>
  date.getFullYear() > today.getFullYear()
