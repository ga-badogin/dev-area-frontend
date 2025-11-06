import { AppRouter } from './providers/router/ui/AppRouter'
import { Notification } from '@/entities/Notification'

const App = () => {
  return (
    <div>
      <AppRouter />
      <Notification />
    </div>
  )
}

export default App
