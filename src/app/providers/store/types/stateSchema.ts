import { rtkApi } from '@/shared/api/rtkApi'
import { IAuthSchema } from '@/features/Auth'

export interface IStateSchema {
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
}
