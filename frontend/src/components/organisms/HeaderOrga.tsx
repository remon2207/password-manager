import { HeaderMole } from 'components/molecules'

export const HeaderOrga: React.FC = () => {
  return (
    <>
      <header>
        <nav className="flex h-24 flex-row items-center justify-center bg-gray-200">
          <HeaderMole />
        </nav>
      </header>
    </>
  )
}
