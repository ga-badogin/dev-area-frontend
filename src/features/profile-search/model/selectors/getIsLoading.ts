import { buildSelector } from '@/shared/lib/store/buildSelector'

export const [useIsLoading] = buildSelector(
  (state) => state.profileSearch?.isLoading || false
)
