import { useState } from 'react'

import { SetUserIdContext, UserIdContext } from 'utils/context/user'

type Props = {
  children: React.ReactNode
}

export const UserIdProvider: React.FC<Props> = ({ children }) => {
  const [userId, setUserId] = useState(0)
  return (
    <>
      <UserIdContext.Provider value={userId}>
        <SetUserIdContext.Provider value={setUserId}>
          {children}
        </SetUserIdContext.Provider>
      </UserIdContext.Provider>
    </>
  )
}
