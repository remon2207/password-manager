import { createContext } from 'react'

import type { SetStatusState, StatusState } from 'types'

export const StatusContext = createContext<StatusState>('')
export const SetStatusContext = createContext<SetStatusState>(() => undefined)
