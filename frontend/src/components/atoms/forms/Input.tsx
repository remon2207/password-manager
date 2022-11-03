type Props = {
  type: string
}

export const Input: React.FC<Props> = ({ type }) => {
  return (
    <>
      <input type={type} />
    </>
  )
}
