import UserIcon from '@/shared/assets/icons/User.svg'
import { getAppRoute, getAuthRoute } from '@/shared/lib/router/getRoute'
import LogoutIcon from '@/shared/assets/icons/Logout.svg'
import { ACCESS_TOKEN_KEY } from '@/shared/consts/localestorage'
import { useNavigate } from 'react-router-dom'
import { useIsAuth, useUserInfo } from '@/entities/user'
import { useLogoutMutation } from '@/entities/auth'
import { useMemo } from 'react'
import { TDropdownItems } from '@/shared/ui/Dropdown/Dropdown'

export const useDropDownConfig = (): TDropdownItems => {
  const navigate = useNavigate()
  const userInfo = useUserInfo()
  const [logout, { isLoading }] = useLogoutMutation()
  const isAuth = useIsAuth()

  return useMemo(() => {
    return [
      {
        text: 'Профиль',
        Icon: UserIcon,
        visibility: isAuth,
        onClick: () =>
          navigate(
            getAppRoute(['profile', { username: userInfo?.username || '' }])
          )
      },
      {
        text: 'Вход',
        Icon: LogoutIcon,
        visibility: !isAuth,
        onClick: () => navigate(getAuthRoute(['login']))
      },

      {
        text: 'Выход',
        Icon: LogoutIcon,
        visibility: isAuth,
        isLoading,
        onClick: () => {
          localStorage.removeItem(ACCESS_TOKEN_KEY)
          logout()
        }
      }
    ]
  }, [navigate, userInfo, logout, isAuth, isLoading])
}
