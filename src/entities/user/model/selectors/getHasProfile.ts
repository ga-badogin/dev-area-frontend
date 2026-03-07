import { buildSelector } from '@/shared/lib/store/buildSelector'

export const [useHasProfile] = buildSelector((state) => {
  const user = state.user.info

  if (!user) return undefined

  return Boolean(user.profile)
})
