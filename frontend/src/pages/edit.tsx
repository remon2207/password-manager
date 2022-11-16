import { useContext, useEffect } from 'react'

import { EditTemp } from 'components/templates'
import { client, getPw, PwInfoContext, SetStatusContext } from 'utils'

import type { GetServerSideProps, NextPage } from 'next'
import type { GetPw } from 'types'

type Props = GetPw

const Edit: NextPage<Props> = ({ getPw }) => {
  const setStatus = useContext(SetStatusContext)
  // const pwInfo = useContext(PwInfoContext)

  useEffect(() => {
    setStatus('')
  }, [setStatus])

  return (
    <>
      <PwInfoContext.Provider value={getPw}>
        <EditTemp
          defaultChecked={getPw.twoFactor}
          emailDefault={getPw.email}
          nameDefault={getPw.name}
          passwordDefault={getPw.password}
          pwId={getPw.id}
          secretDefault={getPw.secret}
          serviceDefault={getPw.service}
          userId={getPw.userId}
        />
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
