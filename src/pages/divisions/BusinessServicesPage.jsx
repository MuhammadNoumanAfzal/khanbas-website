import { DivisionDetailPage } from '../../components/page/DivisionDetailPage.jsx'
import { divisions } from '../../data/divisions.js'

const division = divisions.find((item) => item.id === 'business-services')
const otherDivisions = divisions.filter((item) => item.id !== 'business-services')

export function BusinessServicesPage() {
  return <DivisionDetailPage division={division} otherDivisions={otherDivisions} />
}
