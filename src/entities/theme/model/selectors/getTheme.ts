import { buildSelector } from '@/shared/lib/store/buildSelector'

export const [useTheme] = buildSelector((state) => state.theme.theme)
