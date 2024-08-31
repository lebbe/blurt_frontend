import { useFeed } from './useFeed'
import type { Profile } from '../../../mock/mock'
import type { Message } from '../../../mock/messages'

function getProfile(profiles: Profile[], authorId: number) {
  const profile = profiles.find((profile) => profile.id === authorId)
  if (!profile) {
    throw new Error(`Profile with ID ${authorId} not found`)
  }

  return profile
}

export function Feed({}) {
  const { messages, profiles } = useFeed()

  return (
    <div className="feed">
      <div className="feed-header">
        <h2>Feed</h2>
      </div>
      <div className="feed-list">
        {messages.map((message, index) => (
          <Message
            key={index}
            message={message}
            profile={getProfile(profiles, message.authorId)}
          />
        ))}
      </div>
    </div>
  )
}

type MessageProps = {
  message: Message
  profile: Profile
}

function Message({ message, profile }: MessageProps) {
  return (
    <div className="feed-item">
      <div className="feed-item-author">
        {profile.name} ({profile.city})
      </div>
      <div className="feed-item-content">{message.content}</div>
      <div className="feed-item-timestamp">
        {new Date(message.timestamp).toLocaleString()}
      </div>
    </div>
  )
}
