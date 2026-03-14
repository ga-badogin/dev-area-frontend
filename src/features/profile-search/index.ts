export { ProfileSearch } from './ui/ProfileSearch/ProfileSearch'
export {
  profileSearchReducer,
  useProfileSearchActions,
  getProfileSearchActions
} from './model/slice/profileSearchSlice'
export type { IProfileSearchSchema } from './model/types/profileSearchSchema'

export {
  useSearchParams,
  getSearchParams
} from './model/selectors/getSearchParams'
export { profileSearch } from './model/services/profileSearch'
export { useIsLoading } from './model/selectors/getIsLoading'
export { useHasMore } from './model/selectors/getHasMore'
export { mountProfileSearch } from './model/services/mountProfileSearch'
