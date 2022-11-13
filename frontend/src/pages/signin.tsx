import { signIn, signOut, useSession } from 'next-auth/react'

import type { NextPage } from 'next'

const SignIn: NextPage = () => {
  const { data: session } = useSession()

  if (session) {
    return (
      <>
        Signed in as {session.user?.email} <br />
        <button onClick={() => signOut()} type="button">
          Sign out
        </button>
      </>
    )
  }
  return (
    <>
      Not signed in <br />
      <button
        onClick={() => signIn('github', { callbackUrl: '/' })}
        type="button"
      >
        Sign in
      </button>
    </>
  )
}

export default SignIn
