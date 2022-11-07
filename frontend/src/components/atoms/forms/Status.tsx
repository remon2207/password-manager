type Props = {
  className?: string
  statusMessage: string
}

export const Status: React.FC<Props> = ({ className, statusMessage }) => {
  return (
    <>
      <p className={className}>{statusMessage}</p>
    </>
  )
}
