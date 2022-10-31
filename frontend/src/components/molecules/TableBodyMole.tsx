import { useContext } from 'react'

import { BodyCell } from 'components/atoms/tables/BodyCell'
import { CellDataContext } from 'utils/context/celldata'

export const TableBodyMole: React.FC = () => {
  const cells = useContext(CellDataContext)

  return (
    <>
      {cells.map((cell) => (
        <tr key={cell.id}>
          <BodyCell text={cell.service} />
          <BodyCell text={cell.email} />
          <BodyCell text={cell.name} />
          <BodyCell text={cell.password} />
          <BodyCell text={cell.twoFactor} />
          <BodyCell text={cell.secret} />
        </tr>
      ))}
    </>
  )
}
