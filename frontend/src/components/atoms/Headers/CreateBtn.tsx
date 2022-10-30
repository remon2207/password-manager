type Props = {
  className?: string
}

export const CreateBtn: React.FC<Props> = ({ className }) => {
  return (
    <>
      <button className={className} type="button">
        新規作成
      </button>
    </>
  )
}