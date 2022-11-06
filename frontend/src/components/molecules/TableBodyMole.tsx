import { BodyCell } from 'components/atoms/tables/BodyCell'

type Props = {
  text?: string | boolean
  children?: React.ReactNode
}

export const TableBodyMole: React.FC<Props> = ({ text, children }) => {
  return (
    <>
      <BodyCell className="table-cell" text={text}>
        {children}
      </BodyCell>
    </>
  )
}
