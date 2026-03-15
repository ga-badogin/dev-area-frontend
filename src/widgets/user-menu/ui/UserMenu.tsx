import { classNames } from '@/shared/lib/classNames/classNames'
import { memo } from 'react'
import { DropDown } from '@/shared/ui/DropDown/DropDown'
import UserIcon from '@/shared/assets/icons/User.svg'
import { useNavigate } from 'react-router-dom'
import { Image } from '@/shared/ui/Image/Image'
import LogoutIcon from '@/shared/assets/icons/Logout.svg'
import { getAppRoute } from '@/shared/lib/router/getRoute'
import { useUserInfo } from '@/entities/user'
import { useLogoutMutation } from '@/entities/auth'
import { ACCESS_TOKEN_KEY } from '@/shared/consts/localestorage'

interface UserMenuProps {
  className?: string
}

export const UserMenu = memo((props: UserMenuProps) => {
  const { className } = props

  const navigate = useNavigate()
  const userInfo = useUserInfo()
  const [logout] = useLogoutMutation()

  return (
    <DropDown
      options={[
        {
          text: 'Профиль',
          Icon: UserIcon,
          onClick: () =>
            navigate(
              getAppRoute(['profile', { username: userInfo?.username || '' }])
            )
        },
        {
          text: 'Выход',
          Icon: LogoutIcon,
          onClick: () => {
            localStorage.removeItem(ACCESS_TOKEN_KEY)
            logout()
          }
        }
      ]}
    >
      <Image
        value={userInfo?.profile?.avatarUrl}
        FallbackImage={UserIcon}
        width="40px"
        height="40px"
      />
    </DropDown>
  )
})
