type Props = {
  text: string
}

export const HeaderCell: React.FC<Props> = ({ text }) => {
  return (
    <>
      <th>{text}</th>
    </>
  )
}
