/* eslint-disable react/jsx-props-no-spreading */
import Link from 'next/link'

type Props = {
  navText: string
  href: string
  className?: string
}

export const Nav: React.FC<Props> = ({ navText, href, className }) => {
  return (
    <>
      <Link className={className} href={href}>
        {navText}
      </Link>
    </>
  )
}
