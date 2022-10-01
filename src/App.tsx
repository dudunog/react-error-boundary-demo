import { ErrorBoundary } from 'react-error-boundary'
import { ErrorFallback } from './components/ErrorFallback'
import { Users } from './components/Users'
import { Greeting } from './components/Greeting'

import './App.css'

function App() {
  return (
    <div className="App">
      <h1 style={{ marginBottom: 0 }}>Error Boundary Demo</h1>
      <h3
        className="green-color"
        style={{ marginTop: '.3rem' }}
      >
        Capturando erros de dentro do ciclo de vida do React
      </h3>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        {/* Os usuários falharão ao carregar durante 50% do tempo */}
        <Users />
      </ErrorBoundary>

      <h3
        className="green-color"
        style={{ marginTop: '3rem' }}
      >
        Capturando erros de fora do ciclo de vida do React
      </h3>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Greeting />
      </ErrorBoundary>
    </div>
  )
}

export default App
