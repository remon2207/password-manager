import { HomeTemp } from 'components/templates/HomeTemp'
import { client } from 'utils/apollo-client'
import { CellDataContext } from 'utils/context/cellData'
import { getPws } from 'utils/query'

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

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query<GetPws>({
    query: getPws,
    variables: { userId: 1 },
    fetchPolicy: 'network-only'
  })

  return {
    props: {
      getPws: data.getPws
    }
  }
}

export default Home
