import { Navigate, useLocation } from 'react-router-dom'
import { getSession } from '../lib/authStore'

export function RequireAuth({ children }: { children: React.ReactNode }) {
  const loc = useLocation()
  const s = getSession()
  if (!s.isAuthed) {
    return <Navigate to="/app/auth" replace state={{ from: loc.pathname }} />
  }
  return <>{children}</>
}

export function RequireAdmin({ children }: { children: React.ReactNode }) {
  const loc = useLocation()
  const s = getSession()
  if (!s.isAuthed) {
    return <Navigate to="/app/auth" replace state={{ from: loc.pathname }} />
  }
  if (s.role !== 'admin') {
    return <Navigate to="/app" replace state={{ from: loc.pathname }} />
  }
  return <>{children}</>
}
