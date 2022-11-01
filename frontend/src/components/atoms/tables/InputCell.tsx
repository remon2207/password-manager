type Props = {
  value: string
  className?: string
  size: number
  onFocus?: React.FocusEventHandler<HTMLInputElement>
}

export const InputCell: React.FC<Props> = ({
  value,
  className,
  size,
  onFocus
}) => {
  return (
    <>
      <input
        className={className}
        onFocus={onFocus}
        readOnly
        size={size}
        value={value}
      />
    </>
  )
}
