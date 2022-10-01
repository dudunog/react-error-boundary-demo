import { useState } from 'react'
import { useErrorHandler } from 'react-error-boundary'
import Bugsnag from '@bugsnag/js'

import '../../styles/styles.css'
import './styles.css'

export const Greeting = () => {
  const [greeting, setGreeting] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const handleError = useErrorHandler()

  function handleSubmit(event: any) {
    setIsLoading(true)

    event.preventDefault()
    fetch('http://127.0.0.1:4000')
      .then(
        async newGreeting => {
          setGreeting(await newGreeting.json())
          setIsLoading(false)
        },
        error => {
          // O ErrorBoundary mais próximo vai capturá-lo
          handleError(error)
          Bugsnag.notify(error)
          setIsLoading(false)
        },
    )
  }

  return greeting ? (
    <div>{greeting}</div>
  ) : (
    <>
      <form className='inputGroup' onSubmit={handleSubmit}>
        <label>Name</label>
        <input id="name" />
        <button type="submit">get a greeting</button>
      </form>

      {isLoading &&
        <div
          className='spinner'
          style={{ marginTop: '2rem' }}
        ></div>
      }
    </>
  )
}
