import { buildSelector } from '@/shared/lib/store/buildSelector'

export const [useIsAuth] = buildSelector((state) => {
  const user = state.user.info

  if (user === undefined) return undefined

  return Boolean(user)
})
