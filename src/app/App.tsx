import './styles/index.scss'
import { NotificationList } from '@/widgets/notification-list'
import { useTheme } from '@/entities/theme'
import { Navbar } from '@/widgets/navbar'
import { RenderRouter } from './providers/router/ui/RenderRouter'
import { appRouteConfig } from './providers/router/config/appRouteConfig'
import { AppLoader } from './providers/load/AppLoader'

const App = () => {
  const theme = useTheme()

  return (
    <div className={`app ${theme}`}>
      <AppLoader>
        <RenderRouter routeConfig={appRouteConfig} />
        <Navbar />
      </AppLoader>
      <NotificationList />
    </div>
  )
}

export default App
