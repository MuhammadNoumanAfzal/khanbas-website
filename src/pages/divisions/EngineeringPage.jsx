import { DivisionDetailPage } from '../../components/page/DivisionDetailPage.jsx'
import { divisions } from '../../data/divisions.js'

const division = divisions.find((item) => item.id === 'engineering')
const otherDivisions = divisions.filter((item) => item.id !== 'engineering')

export function EngineeringPage() {
  return <DivisionDetailPage division={division} otherDivisions={otherDivisions} />
}
