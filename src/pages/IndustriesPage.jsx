import { PagePlaceholder } from '../components/page/PagePlaceholder.jsx'
import { PageShell } from '../components/page/PageShell.jsx'

export function IndustriesPage() {
  return (
    <>
      <PageShell
        eyebrow="Industries"
        title="Capabilities Across Industries."
        description="A routed placeholder for industry-specific messaging and visual storytelling across the sectors KHANBAS supports."
        accent="Sector-focused presentation"
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80"
      />
      <PagePlaceholder
        items={[
          'Construction & Infrastructure',
          'Logistics & Transportation',
          'Industrial & Manufacturing',
          'Real Estate & Development',
          'Corporate & Enterprise',
          'Government & Public Sector',
        ]}
      />
    </>
  )
}
