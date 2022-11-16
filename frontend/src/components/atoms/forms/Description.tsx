type Props = {
  htmlFor: string
  labelName?: string
  error?: string
  className?: string
  errorClassName?: string
}

export const Description: React.FC<Props> = ({
  htmlFor,
  labelName,
  error,
  className,
  errorClassName
}) => {
  return (
    <>
      <label className={className} htmlFor={htmlFor}>
        {labelName}
        {error && <span className={errorClassName}>{error}</span>}
      </label>
    </>
  )
}
