import { rtkApi } from '@/shared/api/rtkApi'
import { IAuthSchema } from '@/entities/auth'
import { INotificationSchema } from '@/entities/notification'
import { AppDispatch } from './appDispatch'
import { NavigateFunction } from 'react-router-dom'
import { IThemeSchema } from '@/entities/theme'

export interface IStateSchema {
  notification: INotificationSchema
  theme: IThemeSchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

  // async reducers
  auth?: IAuthSchema
}

export type TStateSchemaKey = keyof IStateSchema

export interface IStateSchemaPartial {
  auth?: undefined
}

export interface IThunkConfig<T> {
  rejectValue: T
  state: IStateSchema
  dispatch: AppDispatch
  extra: { navigate: NavigateFunction }
}
