import Link from 'next/link'
import { useContext } from 'react'

import { InputCell } from 'components/atoms'
import { TableBodyMole, TableHeaderMole } from 'components/molecules'
import { CellDataContext } from 'utils'

export const TableOrga: React.FC = () => {
  const cells = useContext(CellDataContext)

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select()
  }

  return (
    <>
      {cells.length > 0 && (
        <table className="mx-auto w-full table-auto animate-slide-in-bottom lg:w-full xl:w-1/2">
          <thead>
            <TableHeaderMole />
          </thead>
          <tbody>
            {cells.map((cell) => (
              <tr key={cell.id}>
                <TableBodyMole>
                  <Link href={`/edit?id=${cell.id}`}>
                    <span className="hover:underline">{cell.service}</span>
                  </Link>
                </TableBodyMole>
                <TableBodyMole>{cell.email}</TableBodyMole>
                <TableBodyMole>{cell.name}</TableBodyMole>
                <TableBodyMole>
                  <InputCell
                    className="focus:outline-none"
                    onFocus={handleFocus}
                    size={10}
                    value={cell.password}
                  />
                </TableBodyMole>
                <TableBodyMole>
                  {cell.twoFactor ? 'true' : 'false'}
                </TableBodyMole>
                <TableBodyMole>{cell.secret}</TableBodyMole>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}
