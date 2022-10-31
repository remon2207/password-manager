import { TableBodyMole } from "components/molecules/TableBodyMole"
import { TableHeaderMole } from "components/molecules/TableHeaderMole"

export const TableOrga: React.FC = () => {
  return (
    <>
      <table>
        <thead>
          <TableHeaderMole />
        </thead>
          <tbody>
          <TableBodyMole />
        </tbody>
      </table>
    </>
  )
}
