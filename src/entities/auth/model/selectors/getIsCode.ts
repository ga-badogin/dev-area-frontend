import { buildSelector } from '@/shared/lib/store/buildSelector'

export const [useIsCode] = buildSelector((state) => state.auth?.isCode ?? false)
