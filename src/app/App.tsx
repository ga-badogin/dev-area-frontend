import './styles/index.scss'
import { NotificationList } from '@/widgets/notification-list'
import { useTheme } from '@/entities/theme'
import { Navbar } from '@/widgets/navbar'
import { RenderRouter } from './providers/router/ui/RenderRouter'
import { appRouteConfig } from './providers/router/config/appRouteConfig'

const App = () => {
  const theme = useTheme()

  return (
    <div className={`app ${theme}`}>
      <RenderRouter routeConfig={appRouteConfig} />
      <NotificationList />
      <Navbar />
    </div>
  )
}

export default App
