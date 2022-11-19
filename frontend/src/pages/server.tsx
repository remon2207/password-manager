import { ServerTemp } from 'components/templates'
import { GetServers } from 'types/server'
import { ServerCellDataContext } from 'utils'
import { checkSession } from 'utils/checkSession'

import type { GetServerSideProps, NextPage } from 'next'

type Props = GetServers

const Server: NextPage<Props> = ({ getServers }) => {
  return (
    <>
      <ServerCellDataContext.Provider value={getServers}>
        <ServerTemp />
      </ServerCellDataContext.Provider>
    </>
  )
}

export default Server

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

  const { getServers } = session.servers
  const { userId } = session

  return {
    props: {
      getServers,
      userId
    }
  }
}
