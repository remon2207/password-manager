import { BodyCell } from "components/atoms/tables/BodyCell"

export const TableBodyMole: React.FC = () => {
  return (
    <>
      <tr>
        <BodyCell text="service" />
        <BodyCell text="email" />
        <BodyCell text="name" />
        <BodyCell text="password" />
        <BodyCell text="twoFactor" />
        <BodyCell text="secret" />
      </tr>
    </>
  )
}
