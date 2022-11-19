import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'

import { HomeEdit } from 'components/templates/HomeEdit'
import { ServerEdit } from 'components/templates/ServerEdit'
import { GetServer } from 'types/server'
import { client, getPw, PwInfoContext, SetStatusContext } from 'utils'
import { checkSession } from 'utils/checkSession'
import { ServerInfoContext } from 'utils/context/fetchData'
import { getServer } from 'utils/query'

import type { GetServerSideProps, NextPage } from 'next'
import type { GetPw } from 'types'

type Props = GetPw & GetServer

const Edit: NextPage<Props> = ({ getPw, getServer }) => {
  const setStatus = useContext(SetStatusContext)
  const router = useRouter()

  useEffect(() => {
    setStatus('')
  }, [setStatus])

  return (
    <>
      {router.query.location === 'index' && (
        <PwInfoContext.Provider value={getPw}>
          <HomeEdit />
        </PwInfoContext.Provider>
      )}
      {router.query.location === 'server' && (
        <ServerInfoContext.Provider value={getServer}>
          <ServerEdit />
        </ServerInfoContext.Provider>
      )}
    </>
  )
}

export default Edit

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await checkSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false
      }
    }
  }

  const { id } = context.query
  if (typeof id !== 'string') {
    return {
      props: {}
    }
  }
  if (context.query.location === 'index') {
    const pwId = parseInt(id, 10)
    const { data: pw } = await client.query<GetPw>({
      query: getPw,
      variables: { id: pwId }
    })
    return {
      props: {
        getPw: pw.getPw
      }
    }
  }

  const serverId = parseInt(id, 10)
  const { data: server } = await client.query<GetServer>({
    query: getServer,
    variables: {
      id: serverId
    }
  })
  return {
    props: {
      getServer: server.getServer
    }
  }
}
