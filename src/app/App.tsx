import './styles/index.scss'
import { AppRouter } from './providers/router/ui/AppRouter'
import { NotificationList } from '@/entities/Notification'
import { useTheme } from '@/entities/theme'

const App = () => {
  const theme = useTheme()

  return (
    <div className={`app ${theme}`}>
      <AppRouter />
      <NotificationList />
    </div>
  )
}

export default App
