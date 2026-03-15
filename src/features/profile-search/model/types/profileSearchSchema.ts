import { IAbout, TProfileListView } from '@/entities/profile'
import { EntityState } from '@reduxjs/toolkit'

export interface IProfileSearchSchema
  extends EntityState<IAbout, string>,
    IProfileSearchQueryParams {
  isLoading: boolean
  loadingCount: number
  hasMore: boolean

  view: TProfileListView

  _mounted: boolean
}

export interface IProfileSearchQueryParams {
  page: number
  limit: number
  search: string
}
