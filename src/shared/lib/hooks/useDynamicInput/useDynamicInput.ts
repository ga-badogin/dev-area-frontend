import { RefObject, useCallback, useLayoutEffect, useRef } from 'react'
import { getTextWidth } from '../../sizes/getTextWidth'

export const useDynamicInput = (
  ref: RefObject<HTMLInputElement | null>,
  isDynamic?: boolean
) => {
  const fontRef = useRef('')

  const resizeWidth = useCallback(() => {
    if (!isDynamic) return

    const el = ref.current
    if (!el) return

    if (!fontRef.current) {
      const style = getComputedStyle(el)
      fontRef.current = style.font
      // console.log('getComputedStyle')
    }

    const text = el.value || el.placeholder || ' '
    const width = getTextWidth(text, fontRef.current)

    // console.log(width)

    el.style.width = 'auto'
    el.style.width = `${width}px`
  }, [ref, isDynamic])

  useLayoutEffect(() => {
    if (!isDynamic) return
    resizeWidth()
  }, [resizeWidth, isDynamic])

  return resizeWidth
}
