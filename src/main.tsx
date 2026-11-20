import '@fontsource-variable/inter'
import '@fontsource-variable/noto-sans-arabic'
import '@fontsource-variable/space-grotesk'
import './styles/globals.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './app/App'
import { ErrorBoundary } from './components/ui/ErrorBoundary'
import { StaticFatalError } from './components/ui/StaticFatalError'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element was not found.')
}

createRoot(rootElement).render(
  <StrictMode>
    <ErrorBoundary fallback={<StaticFatalError />}>
      <App />
    </ErrorBoundary>
  </StrictMode>,
)
