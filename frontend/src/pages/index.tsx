import { HomeTemp } from 'components/templates/HomeTemp'
import { checkSession } from 'utils/checkSession'
import { CellDataContext } from 'utils/context/cellData'

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
  const getPws = session.data

  return {
    props: {
      getPws
    }
  }
}

export default Home
