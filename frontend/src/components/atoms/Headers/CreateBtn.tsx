import Link from 'next/link'

type Props = {
  className?: string
}

export const CreateBtn: React.FC<Props> = ({ className }) => {
  return (
    <>
      <Link className={className} href="/new">
        新規作成
      </Link>
    </>
  )
}
