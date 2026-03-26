import { buildSelector } from '@/shared/lib/store/buildSelector'

export const [useIsLoading] = buildSelector(
  (state) => state.createProfile?.isLoading ?? false
)
