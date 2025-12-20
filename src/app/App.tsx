import './styles/index.scss'
import { AppRouter } from './providers/router/ui/AppRouter'
import { NotificationList } from '@/widgets/notification-list'
import { useTheme } from '@/entities/theme'
import { Navbar } from '@/widgets/navbar'

const App = () => {
  const theme = useTheme()

  return (
    <div className={`app ${theme}`}>
      <AppRouter />
      <NotificationList />
      <Navbar />
    </div>
  )
}

export default App
