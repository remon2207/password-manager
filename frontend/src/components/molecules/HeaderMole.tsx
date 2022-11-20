import { signOut } from 'next-auth/react'

import { Nav, MenuBtn } from 'components/atoms'
import { SideBar } from 'components/organisms'
import { useToggle } from 'hooks'

type Props = {
  location: string
}

export const HeaderMole: React.FC<Props> = ({ location }) => {
  const { open, handleClickToggle } = useToggle()

  return (
    <>
      <button
        className="mx-auto outline-none xl:hidden"
        onClick={handleClickToggle}
        type="button"
      >
        <MenuBtn />
      </button>
      {open && (
        <SideBar
          className="hover:underline xl:hidden"
          wrapperClassName="absolute top-24 left-0 flex flex-col justify-center items-center bg-white shadow-2xl w-1/5 border-slate-400 border"
        />
      )}
      <Nav
        className="page-transition-btn mx-auto scale-75 xl:scale-100"
        href={`/new?location=${location}`}
        navText="Create new"
      />
      <Nav
        className="mx-auto text-base font-bold hover:underline iphonexr:text-xl xl:text-3xl"
        href="/"
        navText="Password manager"
      />
      <button
        className="page-transition-btn mx-auto scale-75 xl:scale-100"
        onClick={() => signOut({ callbackUrl: '/signin' })}
        type="button"
      >
        Sign out
      </button>
    </>
  )
}
