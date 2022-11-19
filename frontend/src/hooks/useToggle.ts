import { useState } from 'react'

export const useToggle = () => {
  const [open, setOpen] = useState(false)

  const handleClickToggle = () => setOpen(!open)

  return { open, handleClickToggle }
}
