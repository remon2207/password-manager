import { useContext } from 'react'

import { InputCell } from 'components/atoms/tables/InputCell'
import { TableBodyMole } from 'components/molecules/TableBodyMole'
import { TableHeaderMole } from 'components/molecules/TableHeaderMole'
import { CellDataContext } from 'utils/context/cellData'

export const TableOrga: React.FC = () => {
  const cells = useContext(CellDataContext)

  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select()
  }

  return (
    <>
      <table className="mx-auto w-full table-auto lg:w-full xl:w-1/2">
        <thead>
          <TableHeaderMole />
        </thead>
        <tbody>
          {cells.map((cell) => (
            <tr key={cell.id}>
              <TableBodyMole text={cell.service} />
              <TableBodyMole text={cell.email} />
              <TableBodyMole text={cell.name} />
              <TableBodyMole>
                <InputCell
                  className="focus:outline-none"
                  onFocus={handleFocus}
                  size={10}
                  value={cell.password}
                />
              </TableBodyMole>
              <TableBodyMole text={cell.twoFactor} />
              <TableBodyMole text={cell.secret} />
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
