type Props = {
  text?: string | number | boolean
  className?: string
}

export const BodyCell: React.FC<Props> = ({ text, className }) => {
  return (
    <>
      <td className={className}>{text}</td>
    </>
  )
}
