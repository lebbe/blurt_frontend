export type Message = {
  content: string
  authorId: number
  timestamp: number
}

export let messages: Message[] = [
  {
    content: 'Hello, World!',
    authorId: 1,
    timestamp: Date.now(),
  },
  {
    content: 'Hi, there!',
    authorId: 2,
    timestamp: Date.now(),
  },
  {
    content: 'Good morning!',
    authorId: 1,
    timestamp: Date.now(),
  },
  {
    content: 'Check out the latest fashion trends! #Fashion #Style',
    authorId: 1,
    timestamp: Date.now(),
  },
  {
    content:
      'Breaking news: New study shows the benefits of exercise! #Health #Fitness',
    authorId: 2,
    timestamp: Date.now(),
  },
  {
    content:
      'Exciting announcement: Our new collection is now available! #Fashion #Shopping',
    authorId: 1,
    timestamp: Date.now(),
  },
  {
    content: 'Stay tuned for our live event tomorrow! #Fashion #Event',
    authorId: 2,
    timestamp: Date.now(),
  },
  {
    content: "Incredible deals happening now! Don't miss out! #Sale #Shopping",
    authorId: 1,
    timestamp: Date.now(),
  },
  {
    content:
      'Exciting news: Our fashion show is happening next week! Get ready for some amazing designs! #Fashion #Event',
    authorId: 2,
    timestamp: Date.now(),
  },
  {
    content:
      'New article: Top 10 fashion trends for this season. Stay stylish with these tips! #Fashion #Style',
    authorId: 1,
    timestamp: Date.now(),
  },
  {
    content:
      'Breaking news: Scientists discover a new fabric that repels stains. Say goodbye to spills! #Fashion #Innovation',
    authorId: 2,
    timestamp: Date.now(),
  },
  {
    content:
      'Fashion tip of the day: Layering is the key to a stylish and versatile wardrobe! #Fashion #StyleTip',
    authorId: 1,
    timestamp: Date.now(),
  },
  {
    content:
      'Exciting announcement: Our online store is now open! Shop the latest trends from the comfort of your home. #Fashion #Shopping',
    authorId: 2,
    timestamp: Date.now(),
  },
  {
    content:
      'Stay tuned for our upcoming sale! Get ready to grab some amazing deals! #Fashion #Sale',
    authorId: 1,
    timestamp: Date.now(),
  },
  {
    content:
      'Breaking news: Fashion industry leaders gather for a panel discussion on sustainability. #Fashion #Sustainability',
    authorId: 2,
    timestamp: Date.now(),
  },
  {
    content:
      'Fashion inspiration of the day: Mix and match patterns for a bold and unique look! #Fashion #StyleInspo',
    authorId: 1,
    timestamp: Date.now(),
  },
]
