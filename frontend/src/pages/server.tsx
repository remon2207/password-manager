import { HomeTemp } from 'components/templates'
import { ServerTemp } from 'components/templates/ServerTemp'
import { GetServers } from 'types/server'
import { ServerCellDataContext } from 'utils'
import { checkSession } from 'utils/checkSession'

import type { GetServerSideProps, NextPage } from 'next'

type Props = GetServers

const Server: NextPage<Props> = ({ getServers }) => {
  console.log(getServers)
  const cellsText = [
    'Usage',
    'Hostname',
    'IP',
    'Username',
    'Password',
    'Device',
    'Port',
    'URL'
  ]
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
