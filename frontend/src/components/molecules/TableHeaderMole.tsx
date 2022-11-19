import { HeaderCell } from 'components/atoms'

type Props = {
  headerCellText?: string[]
}

export const TableHeaderMole: React.FC<Props> = ({ headerCellText }) => {
  return (
    <>
      <tr>
        {headerCellText?.map((cell) => (
          <HeaderCell key={cell} className="table-cell" text={cell} />
        ))}
      </tr>
    </>
  )
}
