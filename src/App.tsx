import { Navigate, Route, Routes } from 'react-router-dom'
import { BottomNav } from './components/BottomNav'
import { PhoneFrame } from './components/PhoneFrame'
import Auth from './pages/Auth'
import Camera from './pages/Camera'
import Chat from './pages/Chat'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Reels from './pages/Reels'
import LegalCookies from './pages/LegalCookies'
import LegalPrivacy from './pages/LegalPrivacy'
import LegalTerms from './pages/LegalTerms'
import SiteFeatures from './pages/SiteFeatures'
import SiteHome from './pages/SiteHome'
import SitePricing from './pages/SitePricing'
import SiteSafety from './pages/SiteSafety'
import Admin from './pages/Admin'
import { RequireAdmin, RequireAuth } from './components/RequireAuth'

export default function App() {
  return (
    <Routes>
      {/* Website */}
      <Route path="/" element={<SiteHome />} />
      <Route path="/site" element={<SiteHome />} />
      <Route path="/site/features" element={<SiteFeatures />} />
      <Route path="/site/safety" element={<SiteSafety />} />
      <Route path="/site/pricing" element={<SitePricing />} />
      <Route path="/legal/privacy" element={<LegalPrivacy />} />
      <Route path="/legal/terms" element={<LegalTerms />} />
      <Route path="/legal/cookies" element={<LegalCookies />} />

      {/* App prototype */}
      <Route
        path="/app/*"
        element={
          <PhoneFrame>
            <Routes>
              <Route path="auth" element={<Auth />} />
              <Route
                path="admin"
                element={
                  <RequireAdmin>
                    <>
                      <Admin />
                      <BottomNav />
                    </>
                  </RequireAdmin>
                }
              />
              <Route
                path=""
                element={
                  <RequireAuth>
                    <>
                      <Home />
                      <BottomNav />
                    </>
                  </RequireAuth>
                }
              />
              <Route
                path="reels"
                element={
                  <RequireAuth>
                    <>
                      <Reels />
                      <BottomNav />
                    </>
                  </RequireAuth>
                }
              />
              <Route
                path="camera"
                element={
                  <RequireAuth>
                    <>
                      <Camera />
                      <BottomNav />
                    </>
                  </RequireAuth>
                }
              />
              <Route
                path="chat"
                element={
                  <RequireAuth>
                    <>
                      <Chat />
                      <BottomNav />
                    </>
                  </RequireAuth>
                }
              />
              <Route
                path="profile"
                element={
                  <RequireAuth>
                    <>
                      <Profile />
                      <BottomNav />
                    </>
                  </RequireAuth>
                }
              />
              <Route path="*" element={<Navigate to="/app" replace />} />
            </Routes>
          </PhoneFrame>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
