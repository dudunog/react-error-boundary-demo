import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Bugsnag from '@bugsnag/js'
import
  BugsnagPluginReact,
  { BugsnagPluginReactResult }
from '@bugsnag/plugin-react'

import './index.css'

Bugsnag.start({
  apiKey: import.meta.env.VITE_BUGSNAG_API_KEY,
  plugins: [new BugsnagPluginReact()]
})

const ErrorBoundary = 
  (Bugsnag.getPlugin('react') as BugsnagPluginReactResult)
    .createErrorBoundary(React)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
)
