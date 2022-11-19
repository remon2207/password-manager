import { unstable_getServerSession } from 'next-auth/next'

import { authOptions } from 'pages/api/auth/[...nextauth]'
import { GetServers } from 'types/server'

import { client } from './apollo-client'
import { userRegister } from './mutation'
import { getUserId, getPws, getServers } from './query'

import type { GetServerSidePropsContext } from 'next'
import type { GetPws, GetUserId } from 'types'

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
      },
      fetchPolicy: 'network-only'
    })
    const userId = user.getUserId.id
    const { data: pws } = await client.query<GetPws>({
      query: getPws,
      variables: {
        userId
      },
      fetchPolicy: 'network-only'
    })

    const { data: servers } = await client.query<GetServers>({
      query: getServers,
      variables: {
        userId
      },
      fetchPolicy: 'network-only'
    })

    return {
      pws,
      servers,
      userId
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
    const { data: user } = await client.query<GetUserId>({
      query: getUserId,
      variables: {
        name,
        email
      },
      fetchPolicy: 'network-only'
    })
    const userId = user.getUserId.id
    const { data: pws } = await client.query<GetPws>({
      query: getPws,
      variables: {
        userId
      },
      fetchPolicy: 'network-only'
    })
    const { data: servers } = await client.query<GetServers>({
      query: getServers,
      variables: {
        userId
      },
      fetchPolicy: 'network-only'
    })

    return {
      pws,
      servers,
      userId
    }
  }
}
