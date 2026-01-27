import { ForwardedRef } from 'react'

export const setRefs =
  <T>(...refs: Array<ForwardedRef<T>>) =>
  (node: T | null) => {
    refs.forEach((ref) => {
      if (!ref) return

      if (typeof ref === 'function') {
        ref(node)
      } else {
        ref.current = node
      }
    })
  }
