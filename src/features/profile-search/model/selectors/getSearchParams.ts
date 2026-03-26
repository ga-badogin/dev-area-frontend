import { buildSelector } from '@/shared/lib/store/buildSelector'
import { IProfileSearchQueryParams } from '../types/profileSearchSchema'

export const [useSearchParams, getSearchParams] = buildSelector(
  (state): IProfileSearchQueryParams => ({
    page: state.profileSearch?.page ?? 0,
    limit: state.profileSearch?.limit ?? 4,
    search: state.profileSearch?.search ?? ''
  })
)
