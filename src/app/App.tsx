import './styles/index.scss'
import { AppRouter } from './providers/router/ui/AppRouter'
import { classNames } from '@/shared/lib/classNames/classNames'

const App = () => {
  return (
    <div className={classNames('app', {}, ['dark'])}>
      <AppRouter />
    </div>
  )
}

export default App
