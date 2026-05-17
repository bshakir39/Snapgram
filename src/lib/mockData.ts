export type User = {
  id: string
  name: string
  username: string
  avatar: string
  verified?: boolean
}

export type FeedPost = {
  id: string
  user: User
  mediaType: 'photo' | 'reel'
  mediaUrl: string
  caption: string
  tags: string[]
  likes: number
  comments: number
  saves: number
  createdAt: string
}

export type Story = {
  id: string
  user: User
  mediaUrl: string
  createdAt: string
  viewers: number
  closeFriends?: boolean
}

export type Chat = {
  id: string
  user: User
  lastMessage: string
  time: string
  streakDays: number
  snapScore: number
  unread: number
}

export const currentUser: User = {
  id: 'me',
  name: 'Ari Nova',
  username: 'ari.nova',
  avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=256&h=256&dpr=2',
  verified: true,
}

export const users: User[] = [
  {
    id: 'u1',
    name: 'Mina Park',
    username: 'minapark',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=256&h=256&dpr=2',
    verified: true,
  },
  {
    id: 'u2',
    name: 'Leo Chen',
    username: 'leoc',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=256&h=256&dpr=2',
  },
  {
    id: 'u3',
    name: 'Sasha Imani',
    username: 'sasha.imani',
    avatar: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=256&h=256&dpr=2',
  },
  {
    id: 'u4',
    name: 'Noah Silva',
    username: 'noah.s',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=256&h=256&dpr=2',
    verified: true,
  },
]

export const stories: Story[] = [
  {
    id: 's1',
    user: users[0],
    mediaUrl: 'https://images.pexels.com/photos/247929/pexels-photo-247929.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1200&dpr=2',
    createdAt: '2h',
    viewers: 1280,
  },
  {
    id: 's2',
    user: users[1],
    mediaUrl: 'https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1200&dpr=2',
    createdAt: '5h',
    viewers: 804,
    closeFriends: true,
  },
  {
    id: 's3',
    user: users[2],
    mediaUrl: 'https://images.pexels.com/photos/3214958/pexels-photo-3214958.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1200&dpr=2',
    createdAt: '8h',
    viewers: 412,
  },
  {
    id: 's4',
    user: users[3],
    mediaUrl: 'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&w=1200&h=1200&dpr=2',
    createdAt: '12h',
    viewers: 2301,
  },
]

export const feedPosts: FeedPost[] = [
  {
    id: 'p1',
    user: users[0],
    mediaType: 'photo',
    mediaUrl: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1600&dpr=2',
    caption: 'Night market glow ✦ trying a new lens + AI enhance. The city feels like a synthwave loop.',
    tags: ['#nightmode', '#citylights', '#snapgram'],
    likes: 48212,
    comments: 892,
    saves: 1503,
    createdAt: '3h',
  },
  {
    id: 'p2',
    user: users[2],
    mediaType: 'reel',
    mediaUrl: 'https://images.pexels.com/photos/3014010/pexels-photo-3014010.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1600&dpr=2',
    caption: 'Quick reel: 10 seconds of street portraits. Remix on ✦',
    tags: ['#reels', '#portrait', '#remix'],
    likes: 120934,
    comments: 2410,
    saves: 8421,
    createdAt: '7h',
  },
  {
    id: 'p3',
    user: users[1],
    mediaType: 'photo',
    mediaUrl: 'https://images.pexels.com/photos/2113556/pexels-photo-2113556.jpeg?auto=compress&cs=tinysrgb&w=1600&h=1600&dpr=2',
    caption: 'Close friends only: studio day. Poll: drop 1 or 2?',
    tags: ['#studio', '#closefriends'],
    likes: 9033,
    comments: 211,
    saves: 522,
    createdAt: '1d',
  },
]

export const chats: Chat[] = [
  {
    id: 'c1',
    user: users[3],
    lastMessage: 'Sent a snap • tap to view',
    time: 'Now',
    streakDays: 24,
    snapScore: 12440,
    unread: 2,
  },
  {
    id: 'c2',
    user: users[0],
    lastMessage: 'Vanish mode? I have an idea for the collab.',
    time: '12m',
    streakDays: 7,
    snapScore: 8840,
    unread: 0,
  },
  {
    id: 'c3',
    user: users[2],
    lastMessage: 'Voice note (0:12)',
    time: '2h',
    streakDays: 3,
    snapScore: 1390,
    unread: 1,
  },
]
