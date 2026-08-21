import { PagePlaceholder } from '../components/page/PagePlaceholder.jsx'
import { PageShell } from '../components/page/PageShell.jsx'

export function ContactPage() {
  return (
    <>
      <PageShell
        eyebrow="Contact"
        title="Let's Build the Right Combination of Support."
        description="A clean contact page route is now in place for your future form, office information, and inquiry pathways."
        accent="Lead generation entry point"
        backgroundImage="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=80"
      />
      <PagePlaceholder
        items={['Contact Form', 'Office Details', 'Inquiry Paths']}
      />
    </>
  )
}
