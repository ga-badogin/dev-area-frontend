import { RefObject, useEffect } from 'react'
import { MaybeArray } from '@/shared/types'

export const useClickOutside = (
  refs: MaybeArray<RefObject<Node | null>>,
  callback: () => void
) => {
  return useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target

      if (!(target instanceof Node)) return

      const refArray = Array.isArray(refs) ? refs : [refs]

      const isOutside = !refArray.some((ref) => ref.current?.contains(target))

      if (isOutside) {
        callback()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [refs, callback])
}
