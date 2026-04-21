import { RefObject, useCallback, useLayoutEffect, useRef } from 'react'
import { getTextWidth } from '../../sizes/getTextWidth'

export const useDynamicInput = (
  ref: RefObject<HTMLInputElement | null>,
  isDynamic?: boolean
) => {
  const fontRef = useRef<string>('')
  const extraWidth = useRef<number>(0)

  const resizeWidth = useCallback(() => {
    if (!isDynamic) return

    const el = ref.current
    if (!el) return

    if (!fontRef.current && !extraWidth.current) {
      const style = getComputedStyle(el)
      fontRef.current = style.font
      extraWidth.current =
        parseFloat(style.paddingLeft) +
        parseFloat(style.paddingRight) +
        parseFloat(style.borderLeftWidth) +
        parseFloat(style.borderRightWidth)
    }

    const text = el.value || el.placeholder || ' '
    const width = getTextWidth(text, fontRef.current, extraWidth.current)

    el.style.width = 'auto'
    el.style.width = `${width}px`
  }, [ref, isDynamic])

  useLayoutEffect(() => {
    if (!isDynamic) return
    resizeWidth()
  }, [resizeWidth, isDynamic])

  return resizeWidth
}
