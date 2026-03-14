import { IAbout, TProfileListView } from '@/entities/profile'
import { EntityState } from '@reduxjs/toolkit'

export interface IProfileSearchSchema extends EntityState<IAbout, string> {
  isLoading: boolean
  loadingCount: number
  hasMore: boolean

  view: TProfileListView

  page: number
  limit: number
  search: string

  _mounted: boolean
}
