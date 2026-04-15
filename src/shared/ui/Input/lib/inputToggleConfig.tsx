import cls from '../ui/Input.module.scss'
import ClosedEye from '@/shared/assets/icons/ClosedEye.svg'
import OpenedEye from '@/shared/assets/icons/OpenedEye.svg'
import { TToggleConfig } from '../../Toggle/Toggle'

export const inputToggleConfig: TToggleConfig<'text' | 'password'> = [
  { value: 'text', content: <ClosedEye className={cls.toggleIcon} /> },
  { value: 'password', content: <OpenedEye className={cls.toggleIcon} /> }
]
