import ReactDOM from 'react-dom/client'
import App from '../App'
import { BrowserRouter } from 'react-router-dom'
import { ErrorBoundary } from '../providers/error/ErrorBoundary'
import { StoreProvider } from '../providers/store/ui/StoreProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>
)
