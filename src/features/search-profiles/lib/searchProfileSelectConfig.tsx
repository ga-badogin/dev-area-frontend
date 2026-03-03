import cls from '../ui/SearchProfiles.module.scss'
import { TSelectConfig } from '@/shared/ui/Select/Select'
import TilesIcon from '@/shared/assets/icons/Tiles.svg'
import LinesIcon from '@/shared/assets/icons/Lines.svg'
import { TListType } from '../ui/SearchProfiles'

export const searchProfileSelectConfig: TSelectConfig<TListType> = [
  { content: <TilesIcon className={cls.icon} />, value: 'tiles' },
  { content: <LinesIcon className={cls.icon} />, value: 'lines' }
]
