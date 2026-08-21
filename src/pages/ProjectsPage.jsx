import { PagePlaceholder } from '../components/page/PagePlaceholder.jsx'
import { PageShell } from '../components/page/PageShell.jsx'

export function ProjectsPage() {
  return (
    <>
      <PageShell
        eyebrow="Projects"
        title="Proof of Capability, Presented with Clarity."
        description="This page shell is ready for project case studies, integrated capability examples, and future portfolio storytelling."
        accent="Case study ready"
        backgroundImage="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1600&q=80"
      />
      <PagePlaceholder
        items={['Featured Projects', 'Integrated Capabilities', 'Project Highlights']}
      />
    </>
  )
}
