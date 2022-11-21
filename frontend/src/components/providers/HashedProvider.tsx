import { useState } from 'react'

import { SetToHashedContext, ToHashedContext } from 'utils/context/toggle'

type Props = {
  children?: React.ReactNode
}

export const HashedProvider: React.FC<Props> = ({ children }) => {
  const [toHashed, setToHashed] = useState(true)

  return (
    <>
      <ToHashedContext.Provider value={toHashed}>
        <SetToHashedContext.Provider value={setToHashed}>
          {children}
        </SetToHashedContext.Provider>
      </ToHashedContext.Provider>
    </>
  )
}
