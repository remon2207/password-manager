import { BodyCell } from 'components/atoms/tables/BodyCell'

type Props = {
  children?: React.ReactNode
}

export const TableBodyMole: React.FC<Props> = ({ children }) => {
  return (
    <>
      <BodyCell className="table-cell">{children}</BodyCell>
    </>
  )
}
