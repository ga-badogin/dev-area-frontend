import { rtkApi } from '@/shared/api/rtkApi'

export interface IStateSchema {
  mock?: string
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>
}

export type TStateSchemaKey = keyof IStateSchema

export interface IStateSchemaPartial {}

export interface IThunkConfig<T> {
  rejectValue: T
  state: IStateSchema
}
