import { InputCell } from 'components/atoms'
import { TableBodyMole } from 'components/molecules'

type Props = {
  pw?: string
}

export const PwCell: React.FC<Props> = ({ pw }) => {
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    e.target.select()
  }

  return (
    <>
      <TableBodyMole>
        <InputCell
          className="focus:outline-none"
          onFocus={handleFocus}
          size={10}
          value={pw}
        />
      </TableBodyMole>
    </>
  )
}
