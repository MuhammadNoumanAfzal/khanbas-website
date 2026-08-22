import { Navigate, Route, Routes } from 'react-router-dom'
import { MainLayout } from '../components/layout/MainLayout.jsx'
import { divisionsEnabled } from '../data/navigation.js'
import { AboutPage } from '../pages/AboutPage.jsx'
import { ContactPage } from '../pages/ContactPage.jsx'
import { HomePage } from '../pages/HomePage.jsx'
import { IndustriesPage } from '../pages/IndustriesPage.jsx'
import { NotFoundPage } from '../pages/NotFoundPage.jsx'
import { ProjectsPage } from '../pages/ProjectsPage.jsx'
import { BusinessServicesPage } from '../pages/divisions/BusinessServicesPage.jsx'
import { EngineeringPage } from '../pages/divisions/EngineeringPage.jsx'
import { LogisticsPage } from '../pages/divisions/LogisticsPage.jsx'
import { TechnologyPage } from '../pages/divisions/TechnologyPage.jsx'

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="industries" element={<IndustriesPage />} />
        <Route path="projects" element={<ProjectsPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route
          path="engineering-contracting"
          element={
            divisionsEnabled ? <EngineeringPage /> : <Navigate to="/" replace />
          }
        />
        <Route
          path="technology"
          element={divisionsEnabled ? <TechnologyPage /> : <Navigate to="/" replace />}
        />
        <Route
          path="logistics-equipment"
          element={divisionsEnabled ? <LogisticsPage /> : <Navigate to="/" replace />}
        />
        <Route
          path="business-services"
          element={
            divisionsEnabled ? <BusinessServicesPage /> : <Navigate to="/" replace />
          }
        />
        <Route path="home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
