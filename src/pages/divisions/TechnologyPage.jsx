import { DivisionDetailPage } from '../../components/page/DivisionDetailPage.jsx'
import { divisions } from '../../data/divisions.js'

const division = divisions.find((item) => item.id === 'technology')
const otherDivisions = divisions.filter((item) => item.id !== 'technology')

export function TechnologyPage() {
  return <DivisionDetailPage division={division} otherDivisions={otherDivisions} />
}
