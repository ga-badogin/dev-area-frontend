import { rtkApi } from '@/shared/api/rtkApi'
import { IAuthSchema } from '@/entities/auth'
import { INotificationSchema } from '@/entities/notification'
import { AppDispatch } from './appDispatch'
import { NavigateFunction } from 'react-router-dom'
import { IThemeSchema } from '@/entities/theme'
import { IUserSchema } from '@/entities/user'
import { IProfileSearchSchema } from '@/features/profile-search'
import { ICreateProfileSchema } from '@/features/create-profile'
import { IUpdateProfileSchema } from '@/features/update-profile'

export interface IStateSchema {
  notification: INotificationSchema
  theme: IThemeSchema
  user: IUserSchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

  // async reducers
  auth?: IAuthSchema
  profileSearch?: IProfileSearchSchema
  createProfile?: ICreateProfileSchema
  updateProfile?: IUpdateProfileSchema
}

export type TStateSchemaKey = keyof IStateSchema

export interface IStateSchemaPartial {
  profile?: undefined
  auth?: undefined
  searchProfile?: undefined
}

export interface IThunkConfig<T> {
  rejectValue: T
  state: IStateSchema
  dispatch: AppDispatch
  extra: { navigate: NavigateFunction }
}
