type Props = {
  className?: string
}

export const Title: React.FC<Props> = ({ className }) => {
  return (
    <>
      <h1 className={className}>パスワード管理</h1>
    </>
  )
}
