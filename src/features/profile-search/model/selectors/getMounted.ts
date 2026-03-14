import { buildSelector } from '@/shared/lib/store/buildSelector'

export const [useMounted, getMounted] = buildSelector(
  (state) => state.profileSearch?._mounted ?? false
)
