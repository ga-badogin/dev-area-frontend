export type TSameFunc = (
  date: Date,
  start: Date | null,
  end: Date | null
) => boolean

const startOfDay = (d: Date) =>
  new Date(d.getFullYear(), d.getMonth(), d.getDate())

export const isSameDay: TSameFunc = (date, start, end) => {
  if (!start) return false

  const d = startOfDay(date)
  const s = startOfDay(start)
  const e = end ? startOfDay(end) : null

  if (!e) return d.getTime() === s.getTime()

  return d >= s && d <= e
}

const monthIndex = (d: Date) => d.getFullYear() * 12 + d.getMonth()

export const isSameMonth: TSameFunc = (date, start, end) => {
  if (!start) return false

  const d = monthIndex(date)
  const s = monthIndex(start)
  const e = end ? monthIndex(end) : null

  if (!e) return d === s

  return d >= s && d <= e
}

export const isSameYear: TSameFunc = (date, start, end) => {
  if (!start) return false

  const d = date.getFullYear()
  const s = start.getFullYear()
  const e = end ? end.getFullYear() : null

  if (!e) return d === s

  return d >= s && d <= e
}
