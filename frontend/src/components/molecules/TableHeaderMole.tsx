import { HeaderCell } from 'components/atoms'

export const TableHeaderMole: React.FC = () => {
  const cellsText = [
    'Service',
    'Email',
    'Name',
    'Password',
    'TwoFactor',
    'secret'
  ]

  return (
    <>
      <tr>
        {cellsText.map((cell) => (
          <HeaderCell key={cell} className="table-cell" text={cell} />
        ))}
      </tr>
    </>
  )
}
