type Props = {
  text?: string | number | boolean
  children?: React.ReactNode
  className?: string
}

export const BodyCell: React.FC<Props> = ({ text, className, children }) => {
  return (
    <>
      <td className={className}>
        {text}
        {children}
      </td>
    </>
  )
}
