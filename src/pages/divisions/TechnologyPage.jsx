import { PagePlaceholder } from '../../components/page/PagePlaceholder.jsx'
import { PageShell } from '../../components/page/PageShell.jsx'

export function TechnologyPage() {
  return (
    <>
      <PageShell
        eyebrow="Khanbas Technology & Digital Solutions"
        title="Technology That Supports Real Operations."
        description="This page shell is positioned as one division among several, keeping the overall brand balanced while still feeling polished."
        accent="Operational technology positioning"
        backgroundImage="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80"
      />
      <PagePlaceholder
        items={[
          'IT & Digital',
          'Fleet Technology',
          'Security & Intelligence',
          'Smart Solutions',
        ]}
      />
    </>
  )
}
