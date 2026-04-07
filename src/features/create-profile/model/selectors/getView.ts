import { buildSelector } from '@/shared/lib/store/buildSelector'

export const [useView] = buildSelector(
  (state) => state.createProfile?.view ?? 'welcome'
)
