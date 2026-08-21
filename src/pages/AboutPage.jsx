import { PagePlaceholder } from '../components/page/PagePlaceholder.jsx'
import { PageShell } from '../components/page/PageShell.jsx'

export function AboutPage() {
  return (
    <>
      <PageShell
        eyebrow="About Khanbas"
        title="Built for Complex Requirements."
        description="This page is ready for your updated company positioning, vision, mission, and operating model in a more premium and structured layout."
        accent="Corporate positioning"
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=80"
      />
      <PagePlaceholder
        items={['Company Overview', 'Vision', 'Mission', 'Operating Model']}
      />
    </>
  )
}
