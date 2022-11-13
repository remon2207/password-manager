import { GetServerSidePropsContext } from 'next'
import { unstable_getServerSession } from 'next-auth'

import { authOptions } from 'pages/api/auth/[...nextauth]'
import { GetPws } from 'types/pw'
import { GetUserId } from 'types/user'

import { client } from './apollo-client'
import { userRegister } from './mutation'
import { getPws, getUserId } from './query'

export const checkSession = async (context: GetServerSidePropsContext) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  )

  if (!session) {
    return null
  }

  const name = String(session.user?.name)
  const email = String(session.user?.email)

  try {
    const { data: user } = await client.query<GetUserId>({
      query: getUserId,
      variables: {
        name,
        email
      }
    })
    const { data } = await client.query<GetPws>({
      query: getPws,
      variables: {
        userId: user.getUserId.id
      }
    })

    return {
      data
    }
  } catch (e) {
    await client.mutate({
      mutation: userRegister,
      variables: {
        user: {
          name,
          email
        }
      }
    })
    const { data: sessionUserId } = await client.query<GetUserId>({
      query: getUserId,
      variables: {
        name,
        email
      }
    })
    const { data } = await client.query<GetPws>({
      query: getPws,
      variables: {
        userId: sessionUserId.getUserId.id
      }
    })

    return {
      data
    }
  }
}
