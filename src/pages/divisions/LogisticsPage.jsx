import { DivisionDetailPage } from '../../components/page/DivisionDetailPage.jsx'
import { divisions } from '../../data/divisions.js'

const division = divisions.find((item) => item.id === 'logistics')
const otherDivisions = divisions.filter((item) => item.id !== 'logistics')

export function LogisticsPage() {
  return <DivisionDetailPage division={division} otherDivisions={otherDivisions} />
}
