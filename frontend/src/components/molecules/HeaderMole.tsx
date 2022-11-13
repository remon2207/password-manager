import { signOut } from 'next-auth/react'

import { Nav } from 'components/atoms/headers/Nav'

export const HeaderMole: React.FC = () => {
  return (
    <>
      <button
        className="page-transition-btn ml-auto"
        onClick={() => signOut({ callbackUrl: '/signin' })}
        type="button"
      >
        Sign out
      </button>
      <Nav
        className="mx-auto text-2xl font-bold hover:underline"
        href="/"
        navText="Password manager"
      />
      <Nav
        className="page-transition-btn mr-auto"
        href="/new"
        navText="Create new"
      />
    </>
  )
}
