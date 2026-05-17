type Role = 'user' | 'admin'

type Session = {
  isAuthed: boolean
  role: Role
  username: string
}

const KEY = 'snapgram.session.v1'

const defaultSession: Session = {
  isAuthed: false,
  role: 'user',
  username: '',
}

export function getSession(): Session {
  try {
    const raw = localStorage.getItem(KEY)
    if (!raw) return defaultSession
    const parsed = JSON.parse(raw) as Partial<Session>
    return {
      isAuthed: Boolean(parsed.isAuthed),
      role: parsed.role === 'admin' ? 'admin' : 'user',
      username: typeof parsed.username === 'string' ? parsed.username : '',
    }
  } catch {
    return defaultSession
  }
}

export function setSession(next: Session) {
  localStorage.setItem(KEY, JSON.stringify(next))
}

export function clearSession() {
  localStorage.removeItem(KEY)
}

export function loginMock(params: { username: string; role?: Role }) {
  setSession({ isAuthed: true, role: params.role ?? 'user', username: params.username || 'snapgrammer' })
}

export function logoutMock() {
  clearSession()
}
