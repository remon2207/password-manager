import { TableBodyMole } from 'components/molecules/TableBodyMole'
import { TableHeaderMole } from 'components/molecules/TableHeaderMole'

export const TableOrga: React.FC = () => {
  return (
    <>
      <table className="mx-auto w-full table-auto lg:w-full xl:w-1/2">
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
