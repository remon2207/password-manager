import { createContext } from 'react'

import { SetStatusState, StatusState } from 'types/context'

export const StatusContext = createContext<StatusState>(false)
export const SetStatusContext = createContext<SetStatusState>(() => undefined)
