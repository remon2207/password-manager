import Link from 'next/link'

import { TableBodyMole } from 'components/molecules'

type Props = {
  children?: React.ReactNode
  editText: string
  id: number
  location: string
}

export const CommonTable: React.FC<Props> = ({
  children,
  editText,
  id,
  location
}) => {
  return (
    <>
      <tr>
        <TableBodyMole>
          <Link href={`/edit?location=${location}&id=${id}`}>
            <span className="hover:underline">{editText}</span>
          </Link>
        </TableBodyMole>
        {children}
      </tr>
    </>
  )
}
