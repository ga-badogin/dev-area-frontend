import { RefObject, useCallback, useLayoutEffect } from 'react'

export const useDynamicTextarea = (
  ref: RefObject<HTMLTextAreaElement | null>
) => {
  const resizeHeight = useCallback(() => {
    const el = ref.current
    if (!el) return

    if (parseFloat(el.style.height) !== el.scrollHeight) {
      requestAnimationFrame(() => {
        el.style.height = 'auto'
        el.style.height = `${el.scrollHeight}px`
      })
    }
  }, [ref])

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new ResizeObserver(resizeHeight)
    observer.observe(el)
    return () => observer.disconnect()
  }, [ref, resizeHeight])

  return resizeHeight
}
