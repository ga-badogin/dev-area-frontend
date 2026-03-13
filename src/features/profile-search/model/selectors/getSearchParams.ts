import { buildSelector } from '@/shared/lib/store/buildSelector'

export const [useSearchParams, getSearchParams] = buildSelector((state) => ({
  page: state.profileSearch?.page || 0,
  limit: state.profileSearch?.limit || 4,
  search: state.profileSearch?.search || ''
}))
