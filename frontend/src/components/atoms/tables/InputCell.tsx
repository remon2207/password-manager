type Props = {
  value: string
  className?: string
  size: number
}

export const InputCell: React.FC<Props> = ({ value, className, size }) => {
  return (
    <>
      <input className={className} readOnly size={size} value={value} />
    </>
  )
}
