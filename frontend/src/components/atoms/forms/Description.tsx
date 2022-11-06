type Props = {
  htmlFor: string
  labelName: string
  error?: string
}

export const Description: React.FC<Props> = ({ htmlFor, labelName, error }) => {
  return (
    <>
      <label htmlFor={htmlFor} className="my-2">
        {labelName}
        {error && (
          <span className="absolute right-[610px] rounded-md bg-red-300 py-0.5 px-2 text-white">
            {error}
          </span>
        )}
      </label>
    </>
  )
}
