import React, { useEffect, useState } from 'react'

export function useOpenClose(
  isOpen: boolean,
  onClose: (event: React.FormEvent<HTMLButtonElement>) => void
) {
  const [open, setOpen] = useState(isOpen)

  useEffect(() => {
    setOpen(isOpen)
  }, [isOpen])

  function handleOnClose(event: React.FormEvent<HTMLButtonElement>) {
    setOpen(false)
    onClose(event)
  }

  return {
    open,
    handleOnClose,
  }
}
