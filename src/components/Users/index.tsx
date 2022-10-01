import { useEffect, useState } from 'react'

import '../../styles/styles.css'

export const Users = () => {
  const [users, setUsers] = useState<{ id: string; name: string }[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    fetch(
      `https://jsonplaceholder.typicode.com/users${
        Math.random() < 0.5 ? "ss" : ""
      }`
    ).then(async response => {
      const json = await response.json()
      setUsers(json)
      setIsLoading(false)
    })
  }, [])

  return (
    <div
      style={{ marginTop: '2rem' }}
    >
      {!isLoading ? (
        users.map((u) => (
          <p
            key={`u-${u.id}`}
            style={{ marginTop: 0, marginBottom: 0 }}
          >
            {u.name}
          </p>
        ))
      ): (
        <div className='spinner' style={{ paddingBottom: '1rem' }}></div>
      )}
    </div>
  )
}
