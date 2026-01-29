import { Mods } from '@/shared/types'

export function classNames(
  cls: string,
  mods: Mods = {},
  additional: Array<string | undefined> = []
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.keys(mods).filter((key) => mods[key])
  ].join(' ')
}
