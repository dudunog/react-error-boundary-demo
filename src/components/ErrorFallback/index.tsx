import { FallbackProps } from 'react-error-boundary'

export function ErrorFallback({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <div role="alert" style={{ marginTop: '2rem' }}>
      <p>Erro ao carregar usuários:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Tente novamente</button>
    </div>
  )
}
