type Props = {
  text?: string
  className?: string
}

export const HeaderCell: React.FC<Props> = ({ text, className }) => {
  return (
    <>
      <th className={className}>{text}</th>
    </>
  )
}
