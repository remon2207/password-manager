import { useContext } from 'react'

import { BodyCell } from 'components/atoms/tables/BodyCell'
import { InputCell } from 'components/atoms/tables/InputCell'
import { CellDataContext } from 'utils/context/celldata'

export const TableBodyMole: React.FC = () => {
  const cells = useContext(CellDataContext)

  return (
    <>
      {cells.map((cell) => (
        <tr key={cell.id}>
          <BodyCell className="table-cell" text={cell.service} />
          <BodyCell className="table-cell" text={cell.email} />
          <BodyCell className="table-cell" text={cell.name} />
          <BodyCell className="table-cell">
            <InputCell
              className="border-none outline-none"
              size={10}
              value={cell.password}
            />
          </BodyCell>
          <BodyCell className="table-cell" text={cell.twoFactor} />
          <BodyCell className="table-cell" text={cell.secret} />
        </tr>
      ))}
    </>
  )
}
