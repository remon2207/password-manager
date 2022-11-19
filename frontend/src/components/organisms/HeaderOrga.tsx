import { HeaderMole } from 'components/molecules'

type Props = {
  location: string
}

export const HeaderOrga: React.FC<Props> = ({ location }) => {
  return (
    <>
      <header>
        <nav className="flex h-24 flex-row items-center justify-center bg-gray-200">
          <HeaderMole location={location} />
        </nav>
      </header>
    </>
  )
}
