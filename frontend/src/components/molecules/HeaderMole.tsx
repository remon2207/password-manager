import { signOut } from 'next-auth/react'

import { Nav, MenuBtn } from 'components/atoms'
import { SideBar } from 'components/organisms'
import { useToggle } from 'hooks/useToggle'

export const HeaderMole: React.FC = () => {
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
        href="/new"
        navText="Create new"
      />
      <Nav
        className="mx-auto text-2xl font-bold hover:underline"
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
