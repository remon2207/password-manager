import { useState } from 'react'

import { SetStatusContext, StatusContext } from 'utils'

type Props = {
  children: React.ReactNode
}

export const StatusProvider: React.FC<Props> = ({ children }) => {
  const [status, setStatus] = useState('')
  return (
    <>
      <StatusContext.Provider value={status}>
        <SetStatusContext.Provider value={setStatus}>
          {children}
        </SetStatusContext.Provider>
      </StatusContext.Provider>
    </>
  )
}
