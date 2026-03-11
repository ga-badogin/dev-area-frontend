import { IAbout, TProfileListView } from '@/entities/profile'
import { EntityState } from '@reduxjs/toolkit'

export interface IProfileSearchSchema extends EntityState<IAbout, string> {
  view: TProfileListView
}
