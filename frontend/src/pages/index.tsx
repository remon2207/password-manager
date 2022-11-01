import { gql } from '@apollo/client'

import { HomeTemp } from 'components/templates/HomeTemp'
import { client } from 'utils/apollo-client'
import { CellDataContext } from 'utils/context/celldata'

import type { GetServerSideProps, NextPage } from 'next'

const getPws = gql`
  query Query($userId: Int!) {
    getPws(userId: $userId) {
      id
      userId
      service
      email
      name
      password
      twoFactor
      secret
    }
  }
`

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

export default Home

type GetPws = {
  getPws: [
    {
      id: number
      userId: number
      service: string
      email: string
      name: string
      password: string
      twoFactor: boolean
      secret: string
    }
  ]
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await client.query<GetPws>({
    query: getPws,
    variables: { userId: 1 }
  })

  return {
    props: {
      getPws: data.getPws
    }
  }
}
