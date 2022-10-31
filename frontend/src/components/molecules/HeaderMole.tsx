import { Nav } from 'components/atoms/headers/Nav'

export const HeaderMole: React.FC = () => {
  return (
    <>
      <Nav
        className="page-transition-btn ml-auto"
        href="/signin"
        navText="Sign out"
      />
      <Nav className="mx-auto" href="/" navText="Password manager" />
      <Nav className="page-transition-btn mr-auto" href="/new" navText="Create new" />
    </>
  )
}
