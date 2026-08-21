import { PagePlaceholder } from '../../components/page/PagePlaceholder.jsx'
import { PageShell } from '../../components/page/PageShell.jsx'

export function BusinessServicesPage() {
  return (
    <>
      <PageShell
        eyebrow="Khanbas Management & Business Support"
        title="Support Built Around Your Business."
        description="This page shell is ready for management, procurement, project, and operational support services."
        accent="Business support structure"
        backgroundImage="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80"
      />
      <PagePlaceholder
        items={[
          'Management Services',
          'Project Support',
          'Operational Support',
          'Procurement & Coordination',
        ]}
      />
    </>
  )
}
