import { buildSelector } from '@/shared/lib/store/buildSelector'
import { ProfileListView } from '@/entities/profile'

export const [useView] = buildSelector(
  (state) => state.profileSearch?.view || ProfileListView.LINE
)
