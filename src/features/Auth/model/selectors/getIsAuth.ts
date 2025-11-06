import { buildSelector } from '@/shared/lib/store/buildSelector'

export const [useIsAuth] = buildSelector((state) => state.auth?.isAuth)
