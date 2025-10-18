import ReactDOM from 'react-dom/client'
import App from '../App'
import { BrowserRouter } from 'react-router-dom'
import '@/shared/config/i18n/i18n'
import { ErrorBoundary } from '../providers/error/ErrorBoundary'
import { StoreProvider } from '../providers/store/ui/StoreProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>
)
