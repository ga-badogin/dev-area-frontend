import { buildSelector } from '@/shared/lib/store/buildSelector'
import { profilesEntitySelectors } from '../slice/profileSearchSlice'

export const [useProfiles] = buildSelector(profilesEntitySelectors.selectAll)
