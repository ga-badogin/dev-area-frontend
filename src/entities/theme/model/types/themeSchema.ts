import { ValueOf } from '@/shared/types'
import { AppTheme } from '../consts/theme'

export interface IThemeSchema {
  theme: TAppTheme
}

export type TAppTheme = ValueOf<typeof AppTheme>
