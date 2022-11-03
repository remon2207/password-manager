type Props = {
  htmlFor: string
  children: React.ReactNode
}

export const Description: React.FC<Props> = ({ htmlFor, children }) => {
  return (
    <>
      <label htmlFor={htmlFor}>{children}</label>
    </>
  )
}
