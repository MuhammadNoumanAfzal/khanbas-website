import { Outlet } from 'react-router-dom'
import { SiteFooter } from './SiteFooter.jsx'
import { SiteHeader } from './SiteHeader.jsx'

export function MainLayout() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(192,149,63,0.18),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(46,68,92,0.24),transparent_24%),linear-gradient(180deg,#081018_0%,#0d141c_50%,#091018_100%)]" />

      <div className="relative z-10">
        <SiteHeader />
        <main>
          <Outlet />
        </main>
        <SiteFooter />
      </div>
    </div>
  )
}
