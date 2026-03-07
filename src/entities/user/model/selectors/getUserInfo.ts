import { buildSelector } from '@/shared/lib/store/buildSelector'

export const [useUserInfo] = buildSelector((state) => state.user.info)
