import { unstable_getServerSession } from 'next-auth'

import { HomeTemp } from 'components/templates/HomeTemp'
import { client } from 'utils/apollo-client'
import { CellDataContext } from 'utils/context/cellData'
import { getPws } from 'utils/query'

import { authOptions } from './api/auth/[...nextauth]'

import type { GetServerSideProps, NextPage } from 'next'
import type { GetPws } from 'types/pw'

type Props = GetPws

const Home: NextPage<Props> = ({ getPws }) => {
  return (
    <>
      <CellDataContext.Provider value={getPws}>
        <HomeTemp />
      </CellDataContext.Provider>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const session = await unstable_getServerSession(req, res, authOptions)

  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false
      }
    }
  }

  const sessionName = String(session.user?.name)
  const sessionEmail = String(session.user?.email)

  const { data } = await client.query<GetPws>({
    query: getPws,
    variables: { userId: 1 },
    fetchPolicy: 'network-only'
  })

  return {
    props: {
      getPws: data.getPws,
      session
    }
  }
}

export default Home
