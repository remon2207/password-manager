import { createContext } from 'react'

import type { SetToggleState } from 'types'

export const ToHashedContext = createContext(true)
export const SetToHashedContext = createContext<SetToggleState>(() => undefined)
