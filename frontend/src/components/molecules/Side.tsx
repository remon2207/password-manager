import Link from 'next/link'

type Props = {
  href: string
  linkText: string
  className?: string
}

export const Side: React.FC<Props> = ({ href, linkText, className }) => {
  return (
    <>
      <Link className={className} href={href}>
        {linkText}
      </Link>
    </>
  )
}
