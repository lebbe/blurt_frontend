import { useEffect, useState } from 'react'
import type { Message } from '../../../mock/messages'
import type { Profile } from '../../../mock/mock'

export function useFeed() {
  const [messages, setMessages] = useState<Message[]>([])
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  console.log('Vi forsøker å hetne data fra serveren')
  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:3000/feed')
      .then((res) => res.json())
      .then((data) => {
        setMessages(data.messages)
        setProfiles(data.profiles)
        setLoading(false)
      })
      .catch((error) => {
        setError(error)
        setLoading(false)
      })
  }, [])

  return { messages, profiles }
}
