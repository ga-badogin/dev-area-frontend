import './styles/index.scss'
import { NotificationList } from '@/widgets/notification-list'
import { useTheme } from '@/entities/theme'
import { Navbar } from '@/widgets/navbar'
import { RenderRouter } from './providers/router/ui/RenderRouter'
import { appRouteConfig } from './providers/router/config/appRouteConfig'
import { useEffect } from 'react'
import { ACCESS_TOKEN_KEY } from '@/shared/consts/localestorage'
import { useAuthActions } from '@/entities/auth'

const App = () => {
  const theme = useTheme()
  const { setIsAuth } = useAuthActions()

  useEffect(() => {
    const token = localStorage.getItem(ACCESS_TOKEN_KEY)
    setIsAuth(Boolean(token))
  }, [])

  return (
    <div className={`app ${theme}`}>
      <RenderRouter routeConfig={appRouteConfig} />
      <NotificationList />
      <Navbar />
    </div>
  )
}

export default App
