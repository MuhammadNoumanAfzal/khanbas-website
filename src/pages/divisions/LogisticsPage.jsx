import { PagePlaceholder } from '../../components/page/PagePlaceholder.jsx'
import { PageShell } from '../../components/page/PageShell.jsx'

export function LogisticsPage() {
  return (
    <>
      <PageShell
        eyebrow="Khanbas Logistics & Equipment Services"
        title="The Fleet and Equipment Your Operations Need."
        description="This route is ready for fleet rental, equipment support, transportation, and logistics-focused content."
        accent="Fleet, machinery, and logistics support"
        backgroundImage="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=1600&q=80"
      />
      <PagePlaceholder
        items={[
          'Fleet Rental',
          'Heavy Equipment & Machinery',
          'Transportation Support',
          'Logistics Support',
        ]}
      />
    </>
  )
}
