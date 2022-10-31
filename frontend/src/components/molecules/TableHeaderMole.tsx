import { HeaderCell } from 'components/atoms/tables/HeaderCell'

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
          <HeaderCell key={cell} className="break-all border p-2 text-[10px] sm:text-base" text={cell} />
        ))}
      </tr>
    </>
  )
}
