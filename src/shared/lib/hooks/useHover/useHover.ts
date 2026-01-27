import { MouseEvent, useCallback, useMemo, useState } from 'react'

interface IUseHoverBind {
  onMouseEnter: (e: MouseEvent) => void
  onMouseLeave: (e: MouseEvent) => void
}

type TUseHoverResult = [boolean, IUseHoverBind]

export const useHover = () => {
  const [isHover, setIsHover] = useState(false)

  const onMouseEnter = useCallback((e: MouseEvent) => {
    e.preventDefault()
    setIsHover(true)
  }, [])

  const onMouseLeave = useCallback((e: MouseEvent) => {
    e.preventDefault()
    setIsHover(false)
  }, [])

  return useMemo<TUseHoverResult>(
    () => [isHover, { onMouseEnter, onMouseLeave }],
    [isHover, onMouseEnter, onMouseLeave]
  )
}
