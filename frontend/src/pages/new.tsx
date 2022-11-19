import { useContext, useEffect } from 'react'

import { HomeNew } from 'components/templates/HomeNew'
import { ServerNew } from 'components/templates/ServerNew'
import { SetStatusContext } from 'utils'
import { checkSession } from 'utils/checkSession'

import type { GetServerSideProps, NextPage } from 'next'

type Props = {
  location: string
}

const New: NextPage<Props> = ({ location }) => {
  const setStatus = useContext(SetStatusContext)

  useEffect(() => {
    setStatus('')
  }, [setStatus])

  return (
    <>
      {location === 'index' && <HomeNew />}
      {location === 'server' && <ServerNew />}
    </>
  )
}

export default New

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await checkSession(context)
  const { location } = context.query

  if (!session) {
    return {
      redirect: {
        destination: '/signin',
        permanent: false
      }
    }
  }

  return {
    props: {
      location
    }
  }
}
