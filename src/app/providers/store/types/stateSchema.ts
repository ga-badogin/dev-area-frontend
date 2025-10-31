import { rtkApi } from '@/shared/api/rtkApi'
import { IAuthSchema } from '@/features/Auth'

export interface IStateSchema {
  auth: IAuthSchema
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
}

export type TStateSchemaKey = keyof IStateSchema

export interface IStateSchemaPartial {
  auth: IAuthSchema | undefined
}

export interface IThunkConfig<T> {
  rejectValue: T
  state: IStateSchema
}
