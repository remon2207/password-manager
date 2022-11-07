type Props = {
  children?: React.ReactNode
  className?: string
}

export const BodyCell: React.FC<Props> = ({ className, children }) => {
  return (
    <>
      <td className={className}>
        {children}
      </td>
    </>
  )
}
