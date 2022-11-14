import { useContext, useEffect } from 'react'

import { HomeTemp } from 'components/templates'
import { checkSession, CellDataContext, SetUserIdContext } from 'utils'

import type { GetServerSideProps, NextPage } from 'next'
import type { GetPws } from 'types'

type Props = GetPws & {
  userId: number
}

const Home: NextPage<Props> = ({ getPws, userId }) => {
  const setUserId = useContext(SetUserIdContext)

  useEffect(() => {
    setUserId(userId)
  }, [userId, setUserId])

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
  const { getPws } = session.data
  const { userId } = session

  return {
    props: {
      getPws,
      userId
    }
  }
}

export default Home
