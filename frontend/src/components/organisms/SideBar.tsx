import { Side } from 'components/molecules'

type Props = {
  className?: string
  wrapperClassName?: string
}

export const SideBar: React.FC<Props> = ({ className, wrapperClassName }) => {
  return (
    <>
      <aside>
        <div className={wrapperClassName}>
          <Side className={className} href="/" linkText="main" />
          <Side className={className} href="/server" linkText="server" />
        </div>
      </aside>
    </>
  )
}
