import { createContext } from 'react'

import type { SetUserIdState } from 'types'

export const UserIdContext = createContext(0)

export const SetUserIdContext = createContext<SetUserIdState>(() => undefined)
