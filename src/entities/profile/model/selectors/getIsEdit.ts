import { buildSelector } from '@/shared/lib/store/buildSelector'

export const [useIsEdit] = buildSelector(
  (state) => state.profile?.isEdit ?? false
)
