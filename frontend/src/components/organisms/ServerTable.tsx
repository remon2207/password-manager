import Link from 'next/link'
import { useContext } from 'react'

import { InputCell } from 'components/atoms'
import { TableBodyMole, TableHeaderMole } from 'components/molecules'
import { ServerCellDataContext } from 'utils'

export const ServerTable: React.FC = () => {
  const headerCellText = [
    'Usage',
    'Hostname',
    'IP',
    'Username',
    'Password',
    'Device',
    'Port',
    'URL'
  ]
  const cells = useContext(ServerCellDataContext)

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select()
  }

  return (
    <>
      {cells.length > 0 && (
        <table className="mx-auto w-full table-auto animate-slide-in-bottom lg:w-full xl:w-1/2">
          <thead>
            <TableHeaderMole headerCellText={headerCellText} />
          </thead>
          <tbody>
            {cells.map((cell) => (
              <tr key={cell.id}>
                <TableBodyMole>
                  <Link href={`/edit?id=${cell.id}`}>
                    <span className="hover:underline">{cell.usage}</span>
                  </Link>
                </TableBodyMole>
                <TableBodyMole>{cell.hostname}</TableBodyMole>
                <TableBodyMole>{cell.ip}</TableBodyMole>
                <TableBodyMole>{cell.username}</TableBodyMole>
                <TableBodyMole>
                  <InputCell
                    className="focus:outline-none"
                    onFocus={handleFocus}
                    size={10}
                    value={cell.password}
                  />
                </TableBodyMole>
                <TableBodyMole>{cell.device}</TableBodyMole>
                <TableBodyMole>{cell.port}</TableBodyMole>
                <TableBodyMole>{cell.url}</TableBodyMole>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  )
}
