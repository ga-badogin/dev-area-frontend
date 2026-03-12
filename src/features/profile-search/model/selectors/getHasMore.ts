import { buildSelector } from '@/shared/lib/store/buildSelector'

export const [useHasMore] = buildSelector(
  (state) => state.profileSearch?.hasMore ?? true
)
