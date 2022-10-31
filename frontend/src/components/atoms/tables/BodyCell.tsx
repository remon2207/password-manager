type Props = {
  text?: string
}

export const BodyCell: React.FC<Props> = ({ text }) => {
  return (
    <>
      <td>{text}</td>
    </>
  )
}
