import express, { type Request, type Response } from 'express'
import { messages } from './messages'

export type Profile = {
  id: number
  name: string
  age: number
  city: string
}

// In-memory data
let profiles: Profile[] = [
  {
    id: 1,
    name: 'Alice',
    age: 25,
    city: 'New York',
  },
  {
    id: 2,
    name: 'Bob',
    age: 30,
    city: 'San Francisco',
  },
]

const app = express()
app.use(express.json())

// Access-Control-Allow-Origin:  allow all localhost origins
app.use((req: Request, res: Response, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4321')
  next()
})

// GET /feed - Get all messages
app.get('/feed', (req: Request, res: Response) => {
  res.json({
    messages,
    profiles,
  })
})

// GET /profile/:id - Get a profile by ID
app.get('/profile/:id', (req: Request, res: Response) => {
  res.json(profiles[Number(req.params.id) - 1])
})

// POST /message - Create a new message
app.post('/message', (req: Request, res: Response) => {
  const { author, content, authorId } = req.body
  const timestamp = Date.now()

  if (!author || !content) {
    return res.status(400).json({ error: 'Author and content are required' })
  }

  const newMessage = { author, content, timestamp, authorId }
  messages.push(newMessage)

  res.status(201).json(newMessage)
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
