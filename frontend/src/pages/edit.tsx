import { EditTemp } from 'components/templates/EditTemp'
import { client } from 'utils/apollo-client'
import { PwInfoContext } from 'utils/context/fetchData'
import { getPw } from 'utils/query'

import type { GetServerSideProps, NextPage } from 'next'
import type { GetPw } from 'types/pw'

type Props = GetPw

const Edit: NextPage<Props> = ({ getPw }) => {
  return (
    <>
      <PwInfoContext.Provider value={getPw}>
        <EditTemp />
      </PwInfoContext.Provider>
    </>
  )
}

export default Edit

export const getServerSideProps: GetServerSideProps = async (context) => {
  const pwId = Number(context.query.id)
  const { data } = await client.query<GetPw>({
    query: getPw,
    variables: { id: pwId }
  })
  return {
    props: {
      getPw: data.getPw
    }
  }
}
