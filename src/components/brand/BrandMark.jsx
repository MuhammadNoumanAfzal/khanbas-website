import { Link } from 'react-router-dom'

export function BrandMark() {
  return (
    <Link
      to="/"
      className="group inline-flex items-center text-left"
      aria-label="KHANBAS home"
    >
      <img
        src="/logo.png"
        alt="KHANBAS"
        className="h-14 w-auto max-w-[250px] object-contain transition duration-300 group-hover:brightness-110 sm:h-16 sm:max-w-[320px]"
      />
    </Link>
  )
}
