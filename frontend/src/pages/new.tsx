import { useContext, useEffect } from 'react'

import { NewTemp } from 'components/templates'
import { SetStatusContext } from 'utils'

import type { NextPage } from 'next'

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
