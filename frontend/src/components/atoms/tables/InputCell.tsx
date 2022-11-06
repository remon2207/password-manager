import { ComponentPropsWithoutRef } from 'react'

type Props = ComponentPropsWithoutRef<'input'>

export const InputCell: React.FC<Props> = ({
  value,
  className,
  size,
  onFocus,
  onClick
}) => {
  return (
    <>
      <input
        className={className}
        onClick={onClick}
        onFocus={onFocus}
        readOnly
        size={size}
        value={value}
      />
    </>
  )
}
