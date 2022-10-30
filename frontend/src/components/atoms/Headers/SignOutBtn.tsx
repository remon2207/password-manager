type Props = {
  className?: string
}

export const SignOutBtn: React.FC<Props> = ({ className }) => {
  return (
    <>
      <button className={className} type="button">
        サインアウト
      </button>
    </>
  )
}
