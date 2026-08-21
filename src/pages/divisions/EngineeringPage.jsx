import { PagePlaceholder } from '../../components/page/PagePlaceholder.jsx'
import { PageShell } from '../../components/page/PageShell.jsx'

export function EngineeringPage() {
  return (
    <>
      <PageShell
        eyebrow="Khanbas Engineering & Contracting"
        title="Built Around Your Project."
        description="This routed page is ready for engineering and contracting content with the same premium shared site structure."
        accent="Engineering & construction focus"
        backgroundImage="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"
      />
      <PagePlaceholder
        items={[
          'Hero Visual',
          'Civil & Construction Services',
          'Capabilities Grid',
          'Project Consultation CTA',
        ]}
      />
    </>
  )
}
