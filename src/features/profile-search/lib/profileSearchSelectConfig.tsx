import cls from '../ui/SearchFilter/SearchFilter.module.scss'
import { TSelectConfig } from '@/shared/ui/Select/Select'
import { ProfileListView, TProfileListView } from '@/entities/profile'
import TilesIcon from '@/shared/assets/icons/Tiles.svg'
import LinesIcon from '@/shared/assets/icons/Lines.svg'

export const profileSearchSelectConfig: TSelectConfig<TProfileListView> = [
  { content: <LinesIcon className={cls.icon} />, value: ProfileListView.LINE },
  { content: <TilesIcon className={cls.icon} />, value: ProfileListView.TILE }
]
