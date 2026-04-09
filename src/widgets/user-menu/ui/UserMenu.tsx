import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import UserIcon from '@/shared/assets/icons/User.svg'
import { Image } from '@/shared/ui/Image/Image'
import { useUserInfo } from '@/entities/user'
import { useDropDownConfig } from '../lib/useDropDownConfig'
import { Dropdown } from '@/shared/ui/Dropdown/Dropdown'

interface UserMenuProps {
  className?: string
}

export const UserMenu = memo((props: UserMenuProps) => {
  const { className } = props

  const userInfo = useUserInfo()
  const dropDownConfig = useDropDownConfig()

  return (
    <Dropdown options={dropDownConfig}>
      <Image
        value={userInfo?.profile?.avatarUrl}
        FallbackImage={UserIcon}
        width="40px"
        height="40px"
      />
    </Dropdown>
  )
})
