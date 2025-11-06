import './styles/index.scss'
import { AppRouter } from './providers/router/ui/AppRouter'
import { NotificationList } from '@/entities/Notification'

const App = () => {
  return (
    <div className="app dark">
      <AppRouter />
      <NotificationList />
    </div>
  )
}

export default App
