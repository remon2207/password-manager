import { useContext, useEffect } from 'react'

import { NewTemp } from 'components/templates'
import { SetStatusContext } from 'utils'
import { checkSession } from 'utils/checkSession'

import type { GetServerSideProps, NextPage } from 'next'

const New: NextPage = () => {
  const setStatus = useContext(SetStatusContext)

  useEffect(() => {
    setStatus('')
  }, [setStatus])

  return (
    <>
      <NewTemp />
    </>
  )
}

export default New

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

  return {
    props: {}
  }
}
