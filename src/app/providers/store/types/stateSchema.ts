import { rtkApi } from '@/shared/api/rtkApi'
import { IAuthSchema } from '@/entities/auth'
import { INotificationSchema } from '@/entities/notification'
import { AppDispatch } from './appDispatch'
import { NavigateFunction } from 'react-router-dom'
import { IThemeSchema } from '@/entities/theme'
import { IProfileSchema } from '@/entities/profile'

export interface IStateSchema {
  notification: INotificationSchema
  theme: IThemeSchema
  auth: IAuthSchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

  // async reducers
  profile?: IProfileSchema
}

export type TStateSchemaKey = keyof IStateSchema

export interface IStateSchemaPartial {
  profile?: undefined
}

export interface IThunkConfig<T> {
  rejectValue: T
  state: IStateSchema
  dispatch: AppDispatch
  extra: { navigate: NavigateFunction }
}
